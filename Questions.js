class Page{

  constructor(){

  this.title = createElement('h1');

  this.question1 = createElement('h2');
  this.option1 = createButton('Indian Ocean');
  this.option2 = createButton('Pacific Ocean');
  this.option3 = createButton('Arctic Ocean');
  this.option4 = createButton("Atlantic Ocean");
  this.next = createButton("Next");
  this.correct = createElement('h1');

  this.question2 = createElement('h2');
  this.wrong = createElement('h1');

  }

  hide(){
 
   // this.title.hide();
    
    this.question1.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.correct.hide();
    this.wrong.hide();
    this.next.hide();

    




  }

  display(){

   this.title.html("QUIZ");
   this.title.position(displayWidth/2 - 50, 0); 

   
   this.question1.html("1. Which one is the smallest ocean in the World?")
   this.question1.position(200, 100);

   this.option1.position(displayWidth/2 - 400,240);
   this.option2.position(displayWidth/2 - 400,280);
   this.option3.position(displayWidth/2 - 400,320);
   this.option4.position(displayWidth/2 - 400,360);

   this.next.position(displayWidth/2 + 400,400)


  this.option3.mousePressed(()=>{

  score = score + 1;
  score = 1;
  
  this.correct.html("Correct");
  this.correct.position(500,270);

  })

  this.option2.mousePressed(()=>{

    this.wrong.html("Wrong");
    this.wrong.position(500,270);
    this.next.hide();
    this.correct.hide();
    Score = 0;

    })

    this.option1.mousePressed(()=>{

      this.wrong.html("Wrong");
      this.wrong.position(500,270);
      this.next.hide();
      this.correct.hide();
      Score = 0;
  
      })

      this.option4.mousePressed(()=>{

        this.wrong.html("Wrong");
        this.wrong.position(500,270);
        this.next.hide();
        this.correct.hide();
        Score = 0;
    
        })
  

  this.next.mousePressed(()=>{

  
    this.question1.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.correct.hide();
    this.next.hide();
    this.wrong.hide();

    this.option21 = createButton("Asia");
    this.option22 = createButton("Africa");
    this.option23 = createButton("Antartica");
    this.option24 = createButton("Europe");
   
    this.correct1 = createElement('h1');
    this.wrong1 = createElement('h1');

    this.end = createElement('h2');
    this.end2 = createElement("h2");
    this.Score = createElement('h2');
  
    this.question2.html("2. Which continent has the highest number of countries? ?")
    this.question2.position(200, 100);

   this.option21.position(displayWidth/2 - 400,240);
   this.option22.position(displayWidth/2 - 400,280);
   this.option23.position(displayWidth/2 - 400,320);
   this.option24.position(displayWidth/2 - 400,360);
   this.Result = createButton("Result");
   this.Result.position(displayWidth/2 + 400,400);

   
   this.correct1.position(500,270);



   this.option22.mousePressed(()=>{

    if(score === 1){

      score = score+1;
      score = 2;
    }

    if(score === 0){

      score = score+1;
      score = 1;

    }
  
   
    this.correct1.html("Correct");
    this.wrong1.hide();
    
  
    })

    this.option21.mousePressed(()=>{

      score = 1;

      this.wrong1.html("Wrong");
      this.wrong1.position(500,270);
      this.correct1.hide();
    
      })

      this.option23.mousePressed(()=>{

        score = 1;
      this.wrong1.html("Wrong");
      this.wrong1.position(500,270);
      
      })

      this.Result.mousePressed(()=>{

      if(score === 0 ){

        this.end2.html("Try Again");
        this.end2.position(550, 190);

      }else

      this.end.html("Congratulations");
      this.end.position(550, 180);
        

        this.Score.html("Your Score: " + score);
        this.Score.position(550, 200);

        this.question2.hide();
    this.option21.hide();
    this.option22.hide();
    this.option23.hide();
    this.option24.hide();
    this.wrong1.hide();
    this.correct1.hide();



         })

      this.option24.mousePressed(()=>{

          score = 1;
          this.wrong1.html("Wrong");
         this.wrong1.position(500,270);
         this.correct1.hide();


      
        
      })

  })

 

 

  }
}