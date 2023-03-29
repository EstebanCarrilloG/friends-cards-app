export const appViewsEs=[{wName:"home",wClassName:"home__window",wContent:`
      <h1 class = "main__title title--center" id="gTitle" ></h1>
      <form class="form">
      <h2 class="form__title title--center">Configuraciones del juego.</h2>
  
      <fieldset class="form__fieldset">
        <legend class="form__legend">Nivel:</legend>
        <div class="form-imputs__container">
          <input type="radio" id="low" name="level" value="easy"><label for="low">Facil</label>
          <input type="radio" id="medium" name="level" value="medium"><label for="medium">Medio</label>
          <input type="radio" id="high" name="level" value="hard"><label for="high">Dificil</label>
          <input type="radio" name="level" id="questAndDares" value="random" checked><label for="questAndDares">Aleatorio</label>
        </div>
      </fieldset>
      <fieldset class="form__fieldset">
        <legend class="form__legend">Tipo:</legend>
        <div class="form-imputs__container">
          <input type="radio" name="type" id="questions" value="questions"><label for="questions">Preguntas</label>
          <input type="radio" name="type" id="dares" value="dares"><label for="dares">Retos</label>
          <input type="radio" name="type" id="questAndDares" value="questAndDares"><label for="questAndDares">Preguntas y retos</label>
        </div>
      </fieldset>
      
      <div class="form-btn__container">
        <button class = "form__button" type="submit" id="submit">Jugar</button>
      </div>
    </form>`},{wName:"game",wClassName:"game__window",wContent:`<div id="cardsContainer">
    <p class='cardContainer'>Haz click para empezar</p>
  </div>
  <!-- <input id="refe" type="button" value="refresh"></input> -->`},];