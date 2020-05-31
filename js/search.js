$(document).ready(function()
{
        var content="";
    var c="";
    var d="";
    $("#cl").click(function()
    {
        content="<table class='table table-bordered table-hover'><th>Name</th><th>Date of Birth</th><th>Contact Info</th><th>Email</th>";
                         $.ajax({ 
           url: 'http://localhost:3000/getDesiredContact',
           type: 'POST',
           cache: false, 
           data:{name:$("#name").val()},
           success: function(data){
             
                if(data.data.length==0)
                {
                    var content1="<center><h2 class='text-danger'>Sorry No Contact Found</h2></center>";
                    $(".conc").html(content1);
                    return;
                }
                else
                {
                    var data=data.data;
                    for(var i=0;i<data.length;i++)
                    {
                        c="";
                        d="";
                        c+="<ul style='list-style-type:none;'>";
                        d+="<ul style='list-style-type:none;'>";
                        for(var j in data[i].contacts)
                        {
                            c=c+"<li>"+data[i].contacts[j]+"</li>";
                        }
                        c=c+"</ul>";
                        for(var j in data[i].emails)
                        {
                            d=d+"<li>"+data[i].emails[j]+"</li>";
                        }
                        d=d+"</ul>";
                    content+="<tr><td>"+data[i].name+"</td><td>"+data[i].dob.substring(0,10)+"</td><td>"+c+"</td><td>"+d+"</td>";
                    }
                    content+="</table>";
                    $(".conc").html("");
                    $(".conc").html(content);
                }
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        });
        $("#name").val("");     
    });
});