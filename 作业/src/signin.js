/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-17 18:54:56
 * @version $Id$
 */

  //获取dom元素
    var oName=document.getElementById("name");
    var oPassword=document.getElementById("password");
    var hint1=document.getElementById("hint1");
    var hint2=document.getElementById("hint2");
    var btn=document.getElementsByClassName("btn");
    var btn1=document.getElementById("btn1");
    var btn2=document.getElementById("btn2");


    //表单获得焦点时，出现规则提示
    var test1=function(){                                       //名称
        hint1.innerHTML="必填，长度为4~16个字符";
    }
    oName.addEventListener("focus",test1)

    var test2=function(){                                          //密码
        hint2.innerHTML="以字母开头，长度在6~18之间<br>只能包含字母、数字和下划线";
    }
  
    //表单失去焦点时，进行验证
    oName.addEventListener("blur",isNameRight);
    oPassword.addEventListener("blur",isPasswordRight);

    //验证名称
    function isNameRight(){

        if(oName.value==""){
            hint1.innerHTML="名称不能为空";
            hint1.style.color="#f00";
            oName.style.border="2px solid #f00";
            oName.removeEventListener("focus",test1);
            return false;
        }else if(getLength(oName.value)<4||getLength(oName.value)>16){
            hint1.innerHTML="长度只能为4~16个字符";
            hint1.style.color="#f00";
            oName.style.border="2px solid #f00";
            oName.removeEventListener("focus",test1);
            return false;
        }else{
            hint1.innerHTML="格式正确";
            hint1.style.color="#00bf00";
            oName.style.border="2px solid #00bf00";
            oName.removeEventListener("focus",test1);
            return true;
        }
    }
    //计算输入的字符长度
    function getLength(str) {
        var countLength = 0;
        for (var i= 0; i < str.length; i++) {
            char_code = str.charCodeAt(i); //取每一个字符的code值
            if (char_code >= 0 && char_code <= 128) {
                countLength += 1; //如果非汉字就自加1
            } else {
                countLength += 2; //如果非汉字以外就自加2
            }
        }
        return countLength;
    }

    //验证密码
    function isPasswordRight(){

        var reg=/^[a-zA-Z]\w{5,17}$/;

        if(oPassword.value==""){

            hint2.innerHTML="密码不能为空";
            hint2.style.color="#f00";
            oPassword.style.border="2px solid #f00";
            oPassword.removeEventListener("focus",test2,false);
            return false;
        }else if(reg.test(oPassword.value)==true){
            hint2.innerHTML="密码格式正确";
            hint2.style.color="#00bf00";
            oPassword.style.border="2px solid #00bf00";
            oPassword.removeEventListener("focus",test2,false);
            return true;
        }else{
            hint2.innerHTML="请输入正确的密码格式";
            hint2.style.color="#f00";
            oPassword.style.border="2px solid #f00";
            oPassword.removeEventListener("focus",test2,false);
            return false;
        }
    }

   
    btn1.addEventListener("click",function(){
        isPasswordRight();
        isNameRight();

            if(isPasswordRight()&&isNameRight()){
                alert("输入正确");
            }else{
                alert("输入错误");
            }
    },false)
