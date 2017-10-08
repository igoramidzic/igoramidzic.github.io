$(document).ready(function(){
  //Health variable
  var health = Number($('#healthBar').val());
  //Max health variable
  var maxHealth = 300;
  //Hunger variable
  var hunger = Number($('#hungerBar').val());
  //Max hunger variable
  var maxHunger = 300;
  //Cash variable
  var cash = Number($('#cashBar').val());
  //Character's items
  var shoes = false;
  var bicycle = false;
  var education = false;
  var car = false;
  //Character's age variable
  var ageYear = 18;
  var ageDay = 0;
  var daysAlive = 0;
  //Health items cost
  var sleep = 0;
  var clinic = 3;
  var doctorConsultation = 15;
  var hospital = 50;
  var betterHospital = 80;
  //Hunger items cost
  var gargabe = 0;
  var pastry = 2;
  var fastfood = 20;
  var supermarket = 70;
  var restaurant = 140;
  //Jobs salary
  var beg = 1;
  var washCars = 5;
  var workAtBar = 20;
  var deliveryman = 50;
  var taxiDriver = 100;

  //function to increase health
  function increaseHealth(amount){
    // if the health item gives an amount of health that
    // will be less than the maxHealth amount
    if(amount < maxHealth - health){
      //add the health item amount to current health
      $('#healthBar').val(health += amount);
    } else{
      amount = (maxHealth - health)
      $('#healthBar').val(health += amount);
    }
  }

  //function to decrease health
  function decreaseHealth(){
    //always decrease health by 5
    $('#healthBar').val(health -= 5);
  }

  //function to decrease hunger
  function decreaseHunger(amount){
    //if the food item gives an amount of hunger that
    //will be less than the maxHunger amound
    if(amount < maxHunger - hunger){
      //add the food item amount to the current hunger
      $('#hungerBar').val(hunger += amount);
    } else{
      amount = (maxHunger - hunger)
      $('#hungerBar').val(hunger += amount);
    }
  }

  //function to increase hunger
  function increaseHunger(){
    //always increase hunger by 5
    $('#hungerBar').val(hunger -= 5);
  }


  //function to remove cash when buying an item
  function removeCash(amount){
    //remove the amount of cash from their possession
    $('#cashBar').val(cash -= amount);
  }


  //function to add items inventory
  var i = 1;
  function addItems(item){
    if (item == shoes){
      shoes = true;
    } else if (item == 'bicycle'){
      bicycle = true;
    } else if (item == 'education'){
      education = true;
    } else if (item == 'car'){
      car = true;
    }
    i++;
    $('#itemsBar').val(i + '/5');
  }


  //function to increase age
  function increaseAge(){
    if(ageDay < 365){
      ageDay++;
      daysAlive++;
    } else{
      ageDay = 0;
      ageYear++;
      daysAlive++;
    }
    $('#ageInfo').text(ageYear + ' years ' + ageDay + ' days')
  }


  //function to change color of bars
  $('.itemToClick').click(function(){
    //Health bar change
    if(health <= 25){
      $('#healthDiv .bars').css('background-color', 'rgba(250, 125, 124, 0.56)');
      $('#healthDiv .bars').css('border-color', 'rgb(255, 0, 0)');
    } else if(health <= 75 && health > 25){
      $('#healthDiv .bars').css('background-color', 'rgba(250, 184, 124, 0.56)');
      $('#healthDiv .bars').css('border-color', 'rgb(255, 115, 0)');
    } else if (health <= 125 && health > 75){
      $('#healthDiv .bars').css('background-color', 'rgba(250, 233, 124, 0.56)');
      $('#healthDiv .bars').css('border-color', 'rgb(255, 191, 0)');
    } else if (health <= 175 && health > 125){
      $('#healthDiv .bars').css('background-color', 'rgba(202, 250, 124, 0.56)');
      $('#healthDiv .bars').css('border-color', 'rgb(204, 255, 0)');
    } else if (health <= 225 && health > 175){
      $('#healthDiv .bars').css('background-color', 'rgba(126, 250, 124, 0.56)');
      $('#healthDiv .bars').css('border-color', 'rgb(112, 255, 0)');
    } else {
      $('#healthDiv .bars').css('background-color', 'rgba(124, 250, 155, 0.56)');
      $('#healthDiv .bars').css('border-color', 'rgb(0, 255, 10)');
    }
    //Hunger bar change
    if(hunger <= 25){
      $('#hungerDiv .bars').css('background-color', 'rgba(250, 125, 124, 0.56)');
      $('#hungerDiv .bars').css('border-color', 'rgb(255, 0, 0)');
    } else if(hunger <= 75 && hunger > 25){
      $('#hungerDiv .bars').css('background-color', 'rgba(250, 184, 124, 0.56)');
      $('#hungerDiv .bars').css('border-color', 'rgb(255, 115, 0)');
    } else if (hunger <= 125 && hunger > 75){
      $('#hungerDiv .bars').css('background-color', 'rgba(250, 233, 124, 0.56)');
      $('#hungerDiv .bars').css('border-color', 'rgb(255, 191, 0)');
    } else if (hunger <= 175 && hunger > 125){
      $('#hungerDiv .bars').css('background-color', 'rgba(202, 250, 124, 0.56)');
      $('#hungerDiv .bars').css('border-color', 'rgb(204, 255, 0)');
    } else if (hunger <= 225 && hunger > 175){
      $('#hungerDiv .bars').css('background-color', 'rgba(126, 250, 124, 0.56)');
      $('#hungerDiv .bars').css('border-color', 'rgb(112, 255, 0)');
    } else {
      $('#hungerDiv .bars').css('background-color', 'rgba(124, 250, 155, 0.56)');
      $('#hungerDiv .bars').css('border-color', 'rgb(0, 255, 10)');
    }
  })


  //function to test if game is over
  function gameOverTest(){
    if(health <= 0 || hunger <= 0){
      var newDIV;
      $('#body').html('<div id="gameOverDiv"></div>');
      newDIV = $('#gameOverDiv').html();
      $('#gameOverDiv').html(newDIV += '<h1 id="gameOverDisplay">GAME OVER!</h1>')
      newDIV = $('#gameOverDiv').html();
      $('#gameOverDiv').html(newDIV += '<h1 id="gameOverDisplay">You survived ' + daysAlive + ' days!</h1>')
      newDIV = $('#gameOverDiv').html();
      $('#gameOverDiv').html(newDIV += '<input class="resetButton" id="playAgainButton" type="button" value="Play again"/>')
    }
    //if user presses the "play again" button
    //restart the game
    $('.resetButton').click(function(){
      window.location.reload();
    })
  }

  //if user presses the "play again" button
  //restart the game
  $('.resetButton').click(function(){
    window.location.reload();
  })



  //when an item is clicked, run this function
  //this function is really long -- multiple switch statements
  $('.itemToClick').click(function(){

    //set the item variable == to the value of the item clicked
    var item = $(this).val();

    //Beginning of switch statements
    switch(item){
      //Beginning of health items-----------------------------------------------
      case 'Sleep -------------------- $0':
        if(cash >= sleep){
          increaseHealth(10)
          increaseHunger();
          removeCash(0);
          increaseAge();
          gameOverTest();
        }
        break;
      //clinic
      case 'Clinic -------------------- $3':
        if(cash >= clinic){
          increaseHealth(20)
          increaseHunger();
          removeCash(3);
          increaseAge();
          gameOverTest();
        }
        break;
      case 'Dr. consultation ----- $15':
        if(cash >= doctorConsultation){
          increaseHealth(40)
          increaseHunger();
          removeCash(15);
          increaseAge();
          gameOverTest();
        }
        break;
      case 'Hospital --------------- $50':
        if(cash >= hospital){
          increaseHealth(80)
          increaseHunger();
          removeCash(50);
          increaseAge();
          gameOverTest();
        }
        break;
      case 'Better hospital ------- $80':
        if(cash >= betterHospital){
          increaseHealth(80)
          increaseHunger();
          removeCash(80);
          increaseAge();
          gameOverTest();
        }
        break;
      //end of health items

      //beginning of energy items-----------------------------------------------
      //garbage
      case 'Garbage ---------------- $0':
          decreaseHunger(10);
          decreaseHealth();
          removeCash(0);
          increaseAge();
          gameOverTest();
        break;
      //pastry
      case 'Pastry ------------------- $2':
        if(cash >= pastry){
          decreaseHunger(25);
          decreaseHealth();
          removeCash(2);
          increaseAge();
          gameOverTest();
        }
        break;
      //fastfood
      case 'Fastfood -------------- $20':
        if(cash >= fastfood){
          decreaseHunger(40);
          decreaseHealth();
          removeCash(20);
          increaseAge();
          gameOverTest();
        }
        break;
      //supermarket
      case 'Supermarket --------- $70':
        if(cash >= supermarket){
          decreaseHunger(120);
          decreaseHealth();
          removeCash(70);
          increaseAge();
          gameOverTest();
        }
        break;
      //restaurant
      case 'Restaurant ---------- $140':
        if(cash >= restaurant){
          decreaseHunger(150);
          decreaseHealth();
          removeCash(140);
          increaseAge();
          gameOverTest();
        }
        break;
      //end of energy items

      //beginning of Jobs-------------------------------------------------------
      //Beg
      case 'Beg ---------------------- $1':
          increaseHunger();
          decreaseHealth();
          removeCash(-1);
          increaseAge();
          gameOverTest();
        break;
      //Wash cars
      case 'Wash cars ------------- $5':
        if(shoes){
          increaseHunger();
          decreaseHealth();
          removeCash(-5);
          increaseAge();
          gameOverTest();
        }
        break;
      //Deliveryman
      case 'Deliveryman --------- $20':
        if(shoes && bicycle){
          increaseHunger();
          decreaseHealth();
          removeCash(-20);
          increaseAge();
          gameOverTest();
        }
        break;
      //Work at bar
      case 'Work at bar ---------- $50':
        if(shoes && bicycle && education){
          increaseHunger();
          decreaseHealth();
          removeCash(-50);
          increaseAge();
          gameOverTest();
        }
        break;
      //Uber driver
      case 'Uber driver ---------- $100':
        if(shoes && education && car){
          increaseHunger();
          decreaseHealth();
          removeCash(-100);
          increaseAge();
          gameOverTest();
        }
        break;
      //end of Jobs

      //beginning of inventory items--------------------------------------------
      //Shoes
      case 'Shoes ----------------- $50':
        if(cash >= 50){
          removeCash(50);
          addItems(shoes);
          $(this).css('background-color', 'rgba(238, 142, 145, 1)');
          $(this).prop('disabled', 'true');
        }
        break;
      //Bicycle
      case 'Bicycle --------------- $500':
        if(cash >= 500){
          removeCash(500);
          addItems('bicycle');
          $(this).css('background-color', 'rgba(238, 142, 145, 1)');
          $(this).prop('disabled', 'true');
        }
        break;
      //Basic education
      case 'Education --------- $5,000':
        if(cash >= 5000){
          removeCash(5000);
          addItems('education');
          $(this).css('background-color', 'rgba(238, 142, 145, 1)');
          $(this).prop('disabled', 'true');
        }
        break;
      //Car
      case 'Car ---------------- $15,000':
        if(cash >= 15000){
          removeCash(15000);
          addItems('car');
          $(this).css('background-color', 'rgba(238, 142, 145, 1)');
          $(this).prop('disabled', 'true');
        }
        break;
    }











  })









})
