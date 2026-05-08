import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBl3FsZMURsxzG_KNEyuGm8nXUIY44TLn8",

authDomain: "axs-comment.firebaseapp.com",

projectId: "axs-comment",

storageBucket: "axs-comment.firebasestorage.app",

messagingSenderId: "661771691298",

appId: "1:661771691298:web:49b519800b953ace13f17b"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


/* PAGE */

const pageId =
location.pathname.replace(/\//g,'');


/* ELEMENT */

const openBtn =
document.getElementById('openComment');

const popup =
document.getElementById('commentPopup');

const closeBtn =
document.querySelector('.closeComment');

const commentList =
document.getElementById('commentList');

const sendBtn =
document.getElementById('sendComment');


/* POPUP */

if(openBtn){

openBtn.onclick = ()=>{

popup.classList.add('active');

};

}

if(closeBtn){

closeBtn.onclick = ()=>{

popup.classList.remove('active');

};

}


/* FIRESTORE QUERY */

const q = query(

collection(
db,
"comments",
pageId,
"list"
),

orderBy("time","desc")

);


/* LOAD COMMENTS */

onSnapshot(q,(snapshot)=>{

commentList.innerHTML = '';

snapshot.forEach((doc)=>{

const data = doc.data();

commentList.innerHTML += `

<div class="commentItem">

<div class="commentName">
${data.name}
</div>

<div class="commentText">
${data.text}
</div>

<div class="commentTime">

${new Date(data.time).toLocaleString()}

</div>

</div>

`;

});

});


/* SEND COMMENT */

if(sendBtn){

sendBtn.onclick = async()=>{

const name =

document
.getElementById('commentName')
.value.trim()

|| 'Anonim';


const text =

document
.getElementById('commentText')
.value.trim();


if(!text){

alert('Isi komentar dulu');

return;

}


await addDoc(

collection(
db,
"comments",
pageId,
"list"
),

{

name:name,

text:text,

time:Date.now()

}

);


document
.getElementById('commentText')
.value='';

};

}