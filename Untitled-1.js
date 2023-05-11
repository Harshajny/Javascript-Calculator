class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement) //a special function 
   { this.previousOperandTextElement=previousOperandTextElement
    this.currentOperandTextElement=currentOperandTextElement
    this.clear() //to clear as soon as we create a new calculator
 }

clear() // functions inside the class Calculator to clear different variable
    {
this.currentOperand= ''
this.previousOperand='' //defaulting to an empty string
this.operation=undefined

    }

    delete()//to delete single number
{

   this.currentOperand=this.currentOperand.toString().slice(0,-1)
}

    appendNumber(number)//wen adding a number from keyboard
{if(number==='.'&& this.currentOperand.includes('.'))return
   this.currentOperand=this.currentOperand.toString()+number.toString()}

    chooseOperation(operation)//choosing the operation and  pass the number
{if(this.currentOperand==='')return
if(this.previousOperand!== '')
{
   this.compute()
}
this.currentOperand=this.currentOperand.toString()+operation.toString()
this.operation=operation
   this.previousOperand=this.currentOperand
   this.currentOperand='' 

   

}

    compute()//compute the values
{
    let computation
    const prev= parseFloat(this.previousOperand)
    const current= parseFloat(this.currentOperand)
    if(isNaN(prev) ||isNaN(current)) return
    switch(this.operation)
    {
      case '+' :  
      computation= prev+current 
      break
      case '-' :  
      computation= prev-current 
      break
      case '*' :  
      computation= prev*current 
      break
      case '÷' :  
      computation= prev/current 
      break
      default :
       return
    }
    this.currentOperand=computation
    this.operation=undefined
    this.previousOperand=''
}
getDisplayNumber(number)
{
   return number
}
    
    updateDisplay()//update the values in output
{
   
   this.currentOperandTextElement.innerText=this.currentOperand
   this.previousOperandTextElement.innerText=this.previousOperand  
}
      
 }

 
 
 
 
 
 
 const numberButtons=document.querySelectorAll('[data-number]')
 const deleteButtons=document.querySelector ('[data-delete]')
 const equalsButton=document.querySelector('[data-equals]')
 const allClearButtons=document.querySelectorAll('[data-all-clear]')
 const previousOperandTextElement=document.querySelector('[data-previous-operand]')
 const currentOperandTextElement=document.querySelector('[data-current-operand]')
 const operationButtons=document.querySelectorAll('[data-operation]')


 const calculator= new Calculator(previousOperandTextElement,currentOperandTextElement)
 numberButtons.forEach(button =>
   {
      button.addEventListener('click',() =>{
         calculator.appendNumber(button.innerText)
         calculator.updateDisplay()
      })
   })
   allClearButtons.forEach(button =>
      {
         button.addEventListener('click',() =>{
            calculator.clear(button.innerText)
            calculator.updateDisplay()
         })
      })
   operationButtons.forEach(button =>
         {
            button.addEventListener('click',() =>{
               calculator.chooseOperation(button.innerText)
               calculator.updateDisplay()
            })
         })

      equalsButton.addEventListener('click', button =>
      {
         calculator.compute()
         calculator.updateDisplay()
      })
      deleteButtons.addEventListener('click', button =>
      {
         calculator.delete()
         calculator.updateDisplay()
        

      })