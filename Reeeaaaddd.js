//<![CDATA[
var dewaBacajuga=new Array,dewaBacajugaNum=0,relatedUrls=new Array;function related_results_labels(e){for(var l=0;l<e.feed.entry.length;l++){var r=e.feed.entry[l];dewaBacajuga[dewaBacajugaNum]=r.title.$t;for(var t=0;t<r.link.length;t++)if("alternate"==r.link[t].rel){relatedUrls[dewaBacajugaNum]=r.link[t].href,dewaBacajugaNum++;break}}}function removeRelatedDuplicates(){for(var e=new Array(0),l=new Array(0),r=0;r<relatedUrls.length;r++)contains(e,relatedUrls[r])||(e.length+=1,e[e.length-1]=relatedUrls[r],l.length+=1,l[l.length-1]=dewaBacajuga[r]);dewaBacajuga=l,relatedUrls=e}function contains(e,l){for(var r=0;r<e.length;r++)if(e[r]==l)return!0;return!1}function printRelatedLabels(){var e=Math.floor((dewaBacajuga.length-1)*Math.random()),l=0;for(document.write("<ul>");l<dewaBacajuga.length&&l<20;)document.write('<li><a href="'+relatedUrls[e]+'">'+dewaBacajuga[e]+"</a></li>"),e<dewaBacajuga.length-1?e++:e=0,l++;document.write("</ul>")}
//]]>
</script> </b:if>
<data:post.body/><data:post.body/>
<div expr:id='&quot;post1&quot; + data:post.id'/>
<div class='dewa-bacajuga'>
<b:if cond='data:post.labels'>
<b:lo
