let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let availableBudget = document.querySelector('.availableBudget');
let send = document.querySelector('.send');
let input = document.querySelectorAll('input');
let addDes = document.querySelector('.addDes');
let valueInp = document.querySelector('.value');
let obj = {

        income:{
        
          textIcome : document.querySelector('.addDes'),
          valueInput: document.querySelector('.value'),
          innerIcome : document.querySelector('.innerIcome'),
          valueIcome : document.querySelector('.valueIcome'),
          now: document.querySelector('.incomeNow'),
          plus :function(){
            
              if(obj.income.textIcome.value === '' || obj.income.valueInput.value === '' ){

                return  ;
               

              }
            
          },
        },
        expenses:{
         
          textIcome : document.querySelector('.addDes'),
          valueInput: document.querySelector('.value'),
          innerIcome : document.querySelector('.innerExpenses'),
          valueIcome : document.querySelector('.valueExpenses'),
          nowMinus : document.querySelector('.expensesNow'),
          minus : function(){
            //return +obj.expenses.valueInput.value;
          },
          minusPercent : document.querySelector('.percent'),
        }
        
      }
      let arr = [];
      let arrMinus = [];


      function getCriete(el){
        true;
        if(addDes.value == '' || valueInp.value == ''){
           return false;
          
        }
        
        let div = document.createElement('div');
        div.innerHTML = el.textIcome.value;
        el.innerIcome.append(div);
        let newDiv = document.createElement('div');
        newDiv.innerHTML = +el.valueInput.value;
        el.valueIcome.append(newDiv);
        let sum = 0;
        let sumMinus = 0;
        let newSpan = document.createElement('span');
        newSpan.innerHTML = 'X';
        newDiv.append(newSpan);
        newDiv.style.cursor ='pointer'
        newSpan.style.marginLeft = '10px';
        newSpan.style.cursor = 'pointer';
        newSpan.style.color = 'red';
        newDiv.classList.add('.activ');
        div.classList.add('.activ');
        newSpan.classList.add('.activ');
        newSpan.style.display ='none';

        window.addEventListener('mouseover', function(event){
               let targetMouse = event.target.getAttribute('class');
               if(targetMouse === '.activ'){
               newSpan.style.display='block';
               

         }
        })
        window.addEventListener('mouseout', function(event){
               let targetMouse = event.target.getAttribute('class');
               if(targetMouse === '.activ'){
               newSpan.style.display='none';
               

         }
        })
      

          if(el.plus){
          
            arr.push(+el.valueInput.value);
            for(let i = 0; i < arr.length; i++){
              sum += arr[i];
              newSpan.addEventListener('click',function(event){
              let numInParent = +parseInt( this.parentElement.innerHTML);
              if(arr[i] === +numInParent ){
                arr[i] = 0;
                el.now.innerHTML -= +numInParent;
                availableBudget.innerHTML =  +availableBudget.innerHTML - +numInParent ;
                div.remove(newDiv);
                newDiv.remove(newSpan);
                //console.log( numInParent);
               // console.log(arr[i]);

              }
              
              })
              
            }
           el.now.innerHTML = sum;
           availableBudget.innerHTML =  +availableBudget.innerHTML + +el.valueInput.value ;
         
          } 
          if(el.minus){
          
            arrMinus.push(+el.valueInput.value);
            for(let i = 0; i < arrMinus.length; i++){
              sumMinus += arrMinus[i];
              let percent = (el.valueInput.value * 100) / +availableBudget.innerHTML;
              el.minusPercent.innerHTML = Math.round(percent) +'%';
              newSpan.addEventListener('click',function(event){
                let numIn = +parseInt( this.parentElement.innerHTML);
                if(arrMinus[i] === +numIn ){
                  arrMinus[i] = 0;
                  el.minusPercent.innerHTML = 0 +'%';
                  el.nowMinus.innerHTML -= +numIn;
                  availableBudget.innerHTML =  +availableBudget.innerHTML + +numIn ;
                  div.remove(newDiv);
                  newDiv.remove(newSpan);
                  
                  //console.log(arr[i]);
  
                }
               
              })
             
          }
          el.nowMinus.innerHTML = sumMinus;
          availableBudget.innerHTML = +availableBudget.innerHTML - +el.valueInput.value;
          
       
        
      }
        el.textIcome.value = '';
        el.valueInput.value = '';
    }
      




window.addEventListener('click',function s(event){

let target = event.target.getAttribute('class');
send.addEventListener('click',function sendAdd(){
  
  send.style.color = '';
  send.style.border = '';
  addDes.style.border = '';
  valueInp.style.border = '';
  minus.style.border = '';
  minus.style.color = '';
          if( target === 'plus' ){
         
                  getCriete(obj.income);
                  
          }
          if(target === 'minus'){
            
                  getCriete(obj.expenses);
                 
          }
        return send.removeEventListener('click' , sendAdd);
        
        })
        if(target === 'minus'){

          send.style.color = 'red';
          send.style.border = '2px solid red';
          addDes.style.border = '2px solid red';
          valueInp.style.border = '2px solid red';
          minus.style.border = '2px solid red';
          minus.style.color = 'red';
        }
        if( target === 'plus' ){
          send.style.color = '';
          send.style.border = '';
          addDes.style.border = '';
          valueInp.style.border = '';
          minus.style.border = '';
          minus.style.color = '';
        }
         
 })

