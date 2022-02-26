function calculate()
{
    let tamil=document.forms["myform"]["tamil"].value;
    let english=document.forms["myform"]["english"].value;
    let maths=document.forms["myform"]["maths"].value;
    let science=document.forms["myform"]["science"].value;
    let social=document.forms["myform"]["social"].value;
    let total=Number(tamil)+Number(english)+Number(maths)+Number(science)+Number(social);
    let average=total/5;
    document.write("<br />Result: <br />")
    document.write("Total mark: "+total);
    document.write("<br />Average mark: "+average);
    if(average>90 && average<=100)
    {
        document.write("<br /><br />S Grade");
    }
    else if(average>80 && average<=90)
    {
        document.write("<br /><br />A grade");
    }
    else if(average>70 && average<=80)
    {
        document.write("<br /><br />B grade");
    }
    else if(average>60 && average<=70)
    {
        document.write("<br /><br />C grade");
    }
    else if(average>50 && average<=60)
    {
        document.write("<br /><br />D grade");
    }
    else if(average>40 && average<=50)
    {
        document.write("<br /><br />E grade");
    }
    else if(average>=0 && average<=40)
    {
        document.write("<br /><br />Fail,better luck next time");
    }
}
