//slide



/*
var index=1
function slidesss(n)
{
    index+=n
    showSlide()
}


    var images=document.getElementsByTagName('img');

function showSlide()
{
    if(index>images.length)
    {
        index=1
    }
    if(index < 1)
        {
            index=images.length
        }
    
    
    for(var i=0;i<images.length;i++)
        {
            images[i].style.display="none"
        }
    images[index-1].style.display="block"
}




showSlide()



*/









var ff=document.getElementById('form')
var tt=document.getElementById('btn-toggle')
function toggle()
{
    if(ff.style.display=='none')
       {
           ff.style.display='block'
           tt.innerHTML='Hidden <i class="fas fa-arrow-up fa-sm  "></i>'
           
            
       }
    else{
        ff.style.display='none'
        tt.innerHTML='Show <i class="fas fa-arrow-down fa-sm  "></i>'
    }
    

}




 
var uname=document.getElementById('uname');
var umail=document.getElementById('umail');
var uphone=document.getElementById('uphone');
var ulocation=document.getElementById('ulocation');
var utime=document.getElementById('utime');



var allData=[]
function addRecord()
{
    var record=
        {
            username:uname.value,
            mail:umail.value,
            phone:uphone.value,
            location:ulocation.value,
            utime:utime.value
       }
    
    
    
    allData.push(record)
    localStorage.setItem("allData",JSON.stringify(allData))
   dispaly();
   clear();
}

function dispaly()
{
    
    
     final="";
    var newData=JSON.parse(localStorage.getItem("allData"));
    
    
for (var i=0;i<newData.length;i++)
    {
        final +="<tr> <td>"+ newData[i].username+"</td><td>"+ newData[i].mail+"</td><td>"+ newData[i].phone+"</td><td>"+ newData[i].location+"</td><td>"+
            newData[i].utime+
            "</td><td>"+"<button  onclick='delet(this)' class='btn-row btn btn-danger btn-sm'> <i class='fa fa-trash-alt'></i></button"+"</td><td>"+"<button  onclick='updata(this)' class=' ml-2 btn-row btn btn-info btn-sm'>updata</button"+
            "</td></tr>"
            
        
        
    }
 
document.getElementById("tbody").innerHTML=final


}
dispaly()

function clear()
{   
    var inps=document.getElementsByTagName("input");
    for (var i=0;i<inps.length ;i++)
        {
            inps[i].value=""
        }
    
}

function delet(r)
{
   // allData.pop();
    
    //var counter=allData.length
     
 
   //document.getElementById("table").deleteRow(1);
    var i = r.parentNode.parentNode.rowIndex;//To Find Index Of Element
    document.getElementById("table").deleteRow(i);
 
//document.getElementById("tbody").innerHTML="Row Deleted"
}




function search()
{
    
    var input, filter, table, tr, td, i;
    input = document.getElementById("input-search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        if (td) 
        {
            
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1)
            {
                             
                tr[i].style.display = "";
            } 
            else 
            {
                tr[i].style.display = "none";
            }
    }       
  }
}

function updata(r)
{
    var i = r.parentNode.parentNode.rowIndex
    console.log("Re="+i)
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    td = tr[i].getElementsByTagName("td")[0];
    td.contentEditable = true;
}
/*

var people=
[
    {name:"Taha",age:21,salary:6900,DateOfBirth:'1/1/1997'},
    {name:"magdy",age:31,salary:9900,DateOfBirth:'1/1/1997'},
    {name:"ahmed",age:27,salary:2900,DateOfBirth:'1/1/1997'},
    {name:"Eman",age:30,salary:6100,DateOfBirth:'1/1/1997'},
    {name:"Tata",age:21,salary:2900,DateOfBirth:'1/1/1997'}
    
]

for (var i=0;i<people.length;i++)
    {
        final +="<tr> <td>"+ people[i].name+"</td><td>"+ people[i].age+"</td><td>"+ people[i].salary+"</td><td>"+ people[i].DateOfBirth+"</td></tr>"
        
    }



document.getElementById("tbody").innerHTML=final


*/









/*
function show()
{
    
        var x= document.getElementById("toggle1");
        var y= document.getElementById("toggle");
        if( x.style.display=="none")
            {
                x.style.display="block";
                y.innerHTML='Hidden ';
                
                
                
            }
    else
        {
            x.style.display="none"
            y.innerHTML="show";
        }
}





*/















/*
var h= window.innerHeight-100;// بيجيب ارتفاع الشاشه بتاعه الجهاز اللى انت فاتحه
var w=window.innerWidth-100// نفس الكلام بس بخصوص الودس
// نقصنا 100 عشان  ميخرجشى من ارتفاع الشاشه
function move()
{
    var x= document.getElementById("circle");
    x.style.left= Math.random()*w+"px"
    x.style.top= Math.random()*h+"px";
}

*/


