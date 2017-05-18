/**
 * 
 * @authors https://github.com/liruifengv
 * @date    2017-05-17 18:47:24
 * @version $Id$
 */

 //获取dom元素
    var oName=document.getElementById("name");
    var oPassword=document.getElementById("password");
    var oRePassword=document.getElementById("repassword");
    var oEmail=document.getElementById("email");
    var oPhone=document.getElementById("phone");
    var hint1=document.getElementById("hint1");
    var hint2=document.getElementById("hint2");
    var hint3=document.getElementById("hint3");
    var hint4=document.getElementById("hint4");
    var hint5=document.getElementById("hint5");
    var btn=document.getElementById("btn");


    //表单获得焦点时，出现规则提示
    var test1=function(){                                       //名称
        hint1.innerHTML="必填，长度为4~16个字符";
    }
    oName.addEventListener("focus",test1)

    var test2=function(){                                          //密码
        hint2.innerHTML="以字母开头，长度在6~18之间<br>只能包含字母、数字和下划线";
    }
    oPassword.addEventListener("focus",test2);

    var test3=function(){                                            //再次输入密码
        hint3.innerHTML="必填，必须与上面输入的密码一致";
    }
    oRePassword.addEventListener("focus",test3);

    var test4=function(){                                           //邮箱
        hint4.innerHTML="必填，请输入正确的邮箱格式";
    }
    oEmail.addEventListener("focus",test4);


    var test5=function(){                                            //手机
        hint5.innerHTML="必填，请输入正确的手机号码";
    }
    oPhone.addEventListener("focus",test5);

    //表单失去焦点时，进行验证
    oName.addEventListener("blur",isNameRight);
    oPassword.addEventListener("blur",isPasswordRight);
    oRePassword.addEventListener("blur",isRePasswordRight);
    oEmail.addEventListener("blur",isEmailRight);
    oPhone.addEventListener("blur",isPhoneRight);


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

    //再次输入密码
    function isRePasswordRight(){

        if(oRePassword.value==""){
            hint3.innerHTML="不能为空";
            hint3.style.color="#f00";
            oRePassword.style.border="2px solid #f00";
            oRePassword.removeEventListener("focus",test3,false);
            return false;
        }else if(oRePassword.value==oPassword.value){
            hint3.innerHTML="密码正确";
            hint3.style.color="#00bf00";
            oRePassword.style.border="2px solid #00bf00";
            oRePassword.removeEventListener("focus",test3,false);
            return true;
        }else{
            hint3.innerHTML="必须与上面输入密码相同";
            hint3.style.color="#f00";
            oRePassword.style.border="2px solid #f00";
            oRePassword.removeEventListener("focus",test3,false);
            return false;
        }
    }

    //验证邮箱
    function isEmailRight(){

        var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(oEmail.value==""){
            hint4.innerHTML="邮箱不能为空";
            hint4.style.color="#f00";
            oEmail.style.border="2px solid #f00";
            oEmail.removeEventListener("focus",test4,false);
            return false;
        }else if(reg.test(oEmail.value)==true){
            hint4.innerHTML="邮箱格式正确";
            hint4.style.color="#00bf00";
            oEmail.style.border="2px solid #00bf00";
            oEmail.removeEventListener("focus",test4,false);
            return true;
        }else{
            hint4.innerHTML="邮箱格式错误";
            hint4.style.color="#f00";
            oEmail.style.border="2px solid #f00";
            oEmail.removeEventListener("focus",test4,false);
            return false;
        }
    }

    //验证手机号
    function isPhoneRight(){
        var reg=/^(13[0-9]|14[5|7|9]|15[0-9]|17[3|5|6|7|8]|18[0-9])\d{8}$/g;

        if(oPhone.value==""){
            hint5.innerHTML="手机不能为空";
            hint5.style.color="#f00";
            oPhone.style.border="2px solid #f00";
            oPhone.removeEventListener("focus",test5,false);
            return false;
        }else if(reg.test(oPhone.value)==true){
            hint5.innerHTML="手机格式正确";
            hint5.style.color="#00bf00";
            oPhone.style.border="2px solid #00bf00";
            oPhone.removeEventListener("focus",test5,false);
            return true;
        }else{
            hint5.innerHTML="手机格式错误";
            hint5.style.color="#f00";
            oPhone.style.border="2px solid #f00";
            oPhone.removeEventListener("focus",test5,false);
            return false;
        }
    }

    btn.addEventListener("click",function(){
        isEmailRight();
        isNameRight();
        isPasswordRight();
        isPhoneRight();
        isRePasswordRight();
            if(isEmailRight()&&isNameRight()&&isPasswordRight()&&isRePasswordRight()&&isPhoneRight()){
                alert("注册成功！");
            }else{
                alert("注册失败！");
            }
    },false)