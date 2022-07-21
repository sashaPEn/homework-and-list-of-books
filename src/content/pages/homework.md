---
title: Домашние задание
slug: /homework
---

<form>
  <select  name="week" id="sa1" class="homework_menu" class="Homework">
    
       
<optgroup label="Текущая неделя">
        <option  value="18.04.2022 Апрель
            1.Математика(Алгебра)-построить график по функции y=2х²-8х+6, №3.228
            2.Физкультура и здоровье-
            3.Англисский язык(у группы Жанны Яраславовны)-у.8b с.132
            3.Информатика(у группы Людмилы Михайловны)-§21
            4.Русский язык-с.200-201(устно)
            5.Англисский язык(у группы Людмилы Михайловны)-
            5.Информатика(у группы Жанны Яраславовны)-§21
            6.Химия-§47 упр. 7 готовимся к олимпиаде
            7.Биология-§55">Понедельник</option>
            <option  value="19.04.2022 Апрель
            1.Физика-повторить §32-34, упражнение 22 задача 5
            2.Математика(Геометрия)-§29 №414, №415, №416
            3.Искусство-
            4.География-§48
            5.Беларуская мова-Пр.345
            6.Беларуская литература-с.232-234(выр.чыт) ">Вторник</option>
            <option value="20.04.2022 Апрель
            1.Биология-
            2.Всемирная История-§27
            3.Математика(Алгебра)-
            4.Физкультура и здоровье-
            5.Труды-
            6.Англисский язык(Жанна Яраславовна)-
            6.Англисский язык(Людмила Михайловна)-">Среда</option>
            <option value="21.04.2022 Апрель
            1.Беларуская мова-
            2.Руский язык-
            3.Русская литература-с.142
            4.Математика(Геометрия)-
            5.История Беларуси-с.134-135
            6.Химия-">Четверг</option>
            <option value="22.04.2022 Апрель
            1.Физкультура и здоровье-
            2.Физика-
            3.Математика(Алгебра)-
            4.География-
            5.Англисский язык(Жанна Яраславовна)-
            5.Англисский язык(Людмила Михайловна)-
            6.Русская литература-с.244-245 (выучить)">Пятница</option>
          </optgroup>
          <optgroup label="Следующая неделя">
            <option  value="25.04.2022 Апрель
             1.Математика(Алгебра)-
             2.Физкультура и здоровье-
             3.Англисский язык(у группы Жанны Яраславовны)-
             3.Информатика(у группы Людмилы Михайловны)-
             3.Англисский язык(у группы Жанны Яраславовны)-
             4.Русский язык-
             5.Англисский язык(у группы Людмилы Михайловны)-
             5.Информатика(у группы Жанны Яраславовны)-
             6.Химия-
             7.Биология-">Понедельник</option>
             <option  value="26.04.2022 Апрель
             1.Физика-
             2.Математика(Геометрия)-
             3.Искусство-
             4.География-
             5.Беларуская мова-
             6.Беларуская литература- ">Вторник</option>
             <option value="27.04.2022 Апрель
             1.Биология-
             2.Всемирная История-
             3.Математика(Алгебра)-
             4.Физкультура и здоровье-
             5.Труды-
             6.Англисский язык(Жанна Яраславовна)-
             6.Англисский язык(Людмила Михайловна)-">Среда</option>
             <option value="28.04.2022 Апрель
             1.Беларуская мова-
             2.Руский язык-
             3.Русская литература-
             4.Математика(Геометрия)-
             5.История Беларуси-
             6.Химия-">Четверг</option>
             <option value="29.04.2022 Апрель
             1.Физкультура и здоровье-
             2.Физика-
             3.Математика(Алгебра)-
             4.География-
             5.Англисский язык(Жанна Яраславовна)-
             5.Англисский язык(Людмила Михайловна)-
             6.Русская литература-">Пятница</option>
           </optgroup>


      </select> 
	</form>
<input  type="button" onclick="f1()" value="Посмотреть" class="homework_button"> 

  <br>
<script>
function f1(){
var a=document.getElementById('sa1').value;
alert(a);
}
</script></br>

<style>
.alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
</style>
<style>
.homework_button{
    height:50px;
    width:400px;
    background-color: #FFFFFF;
   border: 1px solid #CCCCCC;
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
   transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
       border-radius: 4px;
   color: #555555;
   display:block;
       width:400px;
       margin: 20px auto;
   font-size: 14px;
       text-align:center;
   height: 50px;
   line-height: 20px;
   margin-bottom: 10px;
   padding: 4px 6px;
   vertical-align: middle;
       text-decoration:none;

}
.homework_button:hover, .homework_button:focus {
   border-color: rgba(82, 168, 236, 0.8);
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
   outline: 0 none;
}
.homework_menu{
    height:50px;
    width:400px;
}
</style>
<style>
.Homework{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.homework_menu{
    height:50px;
    width:400px;
}
</style>
