<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="content-Type" content="text/html;charset=gb2312">
                <meta name="keywords" content="站长,网页特效,js特效,js脚本,脚本,广告代码,zzjs,zzjs.net,sky,www.zzjs.net,站长特效 网" />
                <meta name="description" content="www.zzjs.net,站长特效网，站长必备js特效及广告代码。大量高质量js特效，提供高质量广告代码下载,尽在站长特效网" />
                <title>网页特效 静态代码的分页效果 站长特效网欢迎您。</title>
                <style type="text/css">
                tr{display:none}
                </style>
            </head>
            <body>
                <a href="http://www.zzjs.net/">站长特效网</a>,站长必备的高质量网页特效和广告代码。zzjs.net，站长js特效。<hr>
                <!--欢迎来到站长特效网，我们网站收集大量高质量js特效，提供许多广告代码下载，网址：www.zzjs.net，zzjs@msn.com,用.net打造靓站-->
                <table id="www_zzjs_net">
                    <tr><td>站长特效01页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效02页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效03页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效04页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效05页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效06页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效07页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效08页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效09页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效10页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效11页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效12页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效13页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效14页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效15页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效16页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效17页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效18页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效19页，打造国内最帅的网页特效站！</td></tr>
                    <tr><td>站长特效20页，打造国内最帅的网页特效站！</td></tr>
                </table>
                <div id="changpage"></div>
                <script language="javascript">
                var obj,j;
                var page=0;
                var nowPage=0;//当前页
                var listNum=3;//每页显示<ul>数
                var PagesLen;//总页数
                var PageNum=4;//分页链接接数(5个)
                onload=function(){
                    obj=document.getElementById("www_zzjs_net").getElementsByTagName("tr");
                    j=obj.length
                    PagesLen=Math.ceil(j/listNum);
                    upPage(0)
                    }
                function upPage(p){
                    nowPage=p
//内容变换
                    for (var i=0;i<j;i++){
                    obj[i].style.display="none"
                    }
                for (var i=p*listNum;i<(p+1)*listNum;i++){
                        if(obj[i])obj[i].style.display="block"
                        }//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
                    //分页链接变换
                    strS='<a href="###" onclick="upPage(0)">首页</a>  '
                    var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2)
                    var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1
                    var strC="",startPage,endPage;
                    if (PageNum>=PagesLen) {startPage=0;endPage=PagesLen-1}
                    else if (nowPage<PageNum_2){startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1}//首页
                        else {startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t}
                        for (var i=startPage;i<=endPage;i++){
                                if (i==nowPage)strC+='<a href="###" style="color:red;font-weight:700;" onclick="upPage('+i+')">'+(i+1)+'</a> '
                                else strC+='<a href="###" onclick="upPage('+i+')">'+(i+1)+'</a> '
                                }//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
                            strE=' <a href="###" onclick="upPage('+(PagesLen-1)+')">尾页</a>  '
                                strE2=nowPage+1+"/"+PagesLen+"页"+"  共"+j+"条"
                                document.getElementById("changpage").innerHTML=strS+strC+strE+strE2
                                }
                                </script>
                            </body>
                        </html>