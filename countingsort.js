
function setup(){

    b=Array.from({length: 1000000}, () => floor(random(1,1000000)));

var A=[];
    for(var i=0;i<10000;i++)
    {
        A[i]=floor(random(1,1000000));
    }
   
    var t0 = performance.now();
    ComparisonCountingSort(A);
    var t1= performance.now();
    console.log('Koha e perfundimit te counting sort = '+(t1-t0)+' milisekonda');
    var t2= performance.now();
    DistributionCountingSort(b,1,1000000);
    var t3= performance.now();
    console.log('Koha e perfundimit te distribution sort = '+(t3-t2)+' milisekonda');



    

}




function ComparisonCountingSort(input){
    var count = [];
    var output = [];
    for (var i=0;i<=input.length-1;i++)
    {
        count[i]=0;
    }
        for(var i=0;i<=input.length-2;i++)
        {
            for(j=i+1;j<=input.length-1;j++)
            {
                if(input[i]<input[j])
                {
                    count[j]=count[j]+1;
                }
                else
                {
                    count[i]=count[i]+1;
                }
                 
            }
        }
    
        for(i=0;i<=input.length-1;i++)
        {
            output[count[i]]=input[i];
        }

        console.log(output);


    }


function DistributionCountingSort(input,l,u){

    var d=[]; // count array ku i shtojme numrimet
    var S=[];
for(j=0;j<=(u-l);j++)
{
    d[j]=0;
}

//rritja e counterit per cdo numer te hasur ne input array (gjetja e frekuences)
for(i=0;i<=input.length-1;i++)
{
    d[input[i]-l]=d[input[i]-l]+1; 
}

//mbledhja e elementeve paraprake (cumulative frequency distribution)
for(j=1;j<(u-l);j++)
{
    d[j]=d[j-1]+d[j];
}

//vendosja sipas frekuences ne array-in perfundimtar s[]
for(i=input.length-1;i>=0;i--)
{
    j=input[i]-l;
    S[d[j]-1]=input[i];
    d[j]=d[j]-1;
}

console.log(S);


}




