export const appViews=[{wName:"home",wClassName:"home__window",wContent:`
        <h1 class = "main__title title--center" id="gTitle"></h1>
        <form class="form">
        <h2 class="form__title title--center">Game settings.</h2>
    
        <fieldset class="form__fieldset">
          <legend class="form__legend">Level:</legend>
          <div class="form-imputs__container">
            <input type="radio" id="low" name="level" value="easy"><label for="low">Easy</label>
            <input type="radio" id="medium" name="level" value="medium"><label for="medium">Medium</label>
            <input type="radio" id="high" name="level" value="hard"><label for="high">Hard</label>
            <input type="radio" name="level" id="questAndDares" value="random" checked><label for="questAndDares">Random</label>
          </div>
        </fieldset>
        <fieldset class="form__fieldset">
          <legend class="form__legend">Type:</legend>
          <div class="form-imputs__container">
            <input type="radio" name="type" id="questions" value="questions"><label for="questions">Questions</label>
            <input type="radio" name="type" id="dares" value="dares"><label for="dares">Dares</label>
            <input type="radio" name="type" id="questAndDares" value="questAndDares"><label for="questAndDares">Dares and questions</label>
          </div>
        </fieldset>
        
        <div class="form-btn__container">
          <button class = "form__button" type="submit" id="submit">Play</button>
        </div>
      </form>`},{wName:"game",wClassName:"game__window",wContent:`<div id="cardsContainer">
        <p class='cardContainer'>Click me to start the game</p>
      </div>
      <!-- <input id="refe" type="button" value="refresh"></input> -->`}];