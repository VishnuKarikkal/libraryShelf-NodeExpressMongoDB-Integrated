function collapsingRows()   //to collapse rows into view on index page
{
    let rows=[];        //to hold all rows
    rows=document.getElementsByClassName('row');
    let btnText=document.getElementsByClassName('btn-info');
    if(btnText[0].textContent == 'more')    //unhiding rows
    {
        let j=0;
        for(let i=3;i<rows.length;i++)
        {
            if(rows[i].classList.contains('hideRow'))   //'hideRow' hides rows
            {
                j++;
                rows[i].classList.remove('hideRow');
                if(j==3)                                //unhiding 3 rows on a click
                {
                    j=i-2;
                    break;
                }
            }
        }
        rows[j].scrollIntoView({ behavior: 'smooth' });     //to scroll into view
        if(document.getElementsByClassName('hideRow').length==0)    //if no rows are hidden
        {
            btnText[0].textContent="less";          //switching the button character
        }
    }
    else        //hiding rows
    {
        for(let i=3;i<rows.length;i++)
        {                        
                rows[i].classList.add('hideRow');      //hides all rows except the 1st 3            
        }
        btnText[0].textContent='more';              //switching the button character
        rows[0].scrollIntoView({ behavior: 'smooth' });     //scroll into view
    }
    
}
