const correctAnsers= ['B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value ];
   userAnswers.forEach((answer, index) => {
      if(answer === correctAnsers[index]){
        score += 25;
      }
   });
    //console.log(score)
   scroll(0,0);
   result.querySelector('span').textContent = `${score}% `;
   result.classList.remove('d-none');

   let output = 0;
   const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}% `;
     if( output === score){
      clearInterval(timer);
     }else{
      output++;
     }
   },50);
});
 

