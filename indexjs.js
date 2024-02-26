document.querySelector("button").addEventListener("click",function(){
    const text=document.querySelector("textarea").value;
    let str=text.split("\n");
    let Sentence="";
    let count=1;
    for(let i=0;i<str.length;i++)
    {
        str[i]=str[i].trim();
        let index=str[i].indexOf("_");
        str[i]=str[i][0].toLowerCase()+str[i].substring(1,index)+str[i][index+1].toUpperCase()+str[i].substring(index+2).toLowerCase();
        let flag=count;
        while(flag)
        {
            str[i]=str[i].padEnd(20," ")+"✅";
            flag--;
        }
        count++;
        Sentence+=str[i]+"\n";
    }
    document.querySelector("textarea").value=Sentence;
});

