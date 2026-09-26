import './style.css'
import { gsap } from 'gsap'

/*
============================================================
LUNARXXIX
CINEMATIC BADMINTON TRIAL
============================================================
*/


/* =========================================================
   PAGE
========================================================= */

document.querySelector('#app').innerHTML = `
  <main class="lunar-page">

    <!-- BACKGROUND -->
    <div class="stars stars-1"></div>
    <div class="stars stars-2"></div>
    <div class="stars stars-3"></div>

    <div class="moon">
      <div class="moon-glow"></div>
      <div class="moon-surface"></div>
    </div>

    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>


    <!-- OPENING -->
    <section class="hero" id="hero">

      <div class="eyebrow">XXIX</div>

      <h1>
        LUNAR
        <span>XXIX</span>
      </h1>

      <p class="subtitle">FOR JAY</p>

      <button class="enter-button" id="enterButton">
        ENTER
        <span class="arrow">→</span>
      </button>

    </section>


    <!-- DOMAIN I -->
    <section class="domain-screen" id="domainScreen">

      <div class="domain-content">

        <div class="domain-label">
          LUNAR DOMAIN
        </div>

        <div class="domain-number">
          JAY
        </div>

        <h2>XXIX</h2>

        <div class="domain-line"></div>

        <div class="stats">

          <div class="stat">
            <span>RANK</span>
            <strong>LEGEND</strong>
          </div>

          <div class="stat">
            <span>ELEMENT</span>
            <strong>MOON</strong>
          </div>

          <div class="stat">
            <span>WEAPON</span>
            <strong>RACKET</strong>
          </div>

          <div class="stat">
            <span>DOMAIN</span>
            <strong>NIGHT</strong>
          </div>

        </div>

        <button class="continue-button" id="continueButton">
          CONTINUE
          <span class="arrow">→</span>
        </button>

      </div>

    </section>


    <!-- DOMAIN II -->
    <section class="trial-screen" id="trialScreen">

      <div class="trial-content">

        <div class="trial-label">
          DOMAIN II
        </div>

        <h2>
          THE MOONLIT
          <span>COURT</span>
        </h2>

        <div class="trial-type">
          BADMINTON TRIAL
        </div>

        <div class="trial-line"></div>

        <div class="trial-stats">
          <span>SPEED</span>
          <span>PRECISION</span>
          <span>REFLEX</span>
        </div>

        <button class="trial-button" id="trialButton">
          BEGIN TRIAL
          <span class="trial-arrow">→</span>
        </button>

      </div>

    </section>


    <!-- =====================================================
         BADMINTON GAME
    ====================================================== -->

    <section class="game-screen" id="gameScreen">

      <!-- HEADER -->
      <div class="game-header">

        <div>
          <span class="game-label">
            MOONLIT COURT
          </span>

          <strong id="gameRank">
            NOVICE
          </strong>
        </div>

        <div class="game-score">

          <span>SCORE</span>

          <strong id="score">
            0
          </strong>

        </div>

      </div>


      <!-- COURT -->
      <div class="court" id="court">

        <!-- Court lines -->
        <div class="court-line court-top"></div>
        <div class="court-line court-bottom"></div>
        <div class="court-line court-left"></div>
        <div class="court-line court-right"></div>

        <!-- Net -->
        <div class="court-net"></div>


        <!-- Player side -->
        <div class="player-side">

          <div class="player-racket" id="playerRacket">
            <div class="racket-head"></div>
            <div class="racket-handle"></div>
          </div>

          <span>JAY</span>

        </div>


        <!-- Opponent side -->
        <div class="opponent-side">

          <div class="opponent-racket" id="opponentRacket">
            <div class="racket-head"></div>
            <div class="racket-handle"></div>
          </div>

          <span>OPPONENT</span>

        </div>


        <!-- Hit effect -->
        <div
          class="hit-effect"
          id="hitEffect"
        ></div>


        <!-- Score popup -->
        <div
          class="score-pop"
          id="scorePop"
        >
          +1
        </div>


        <!-- Speed popup -->
        <div
          class="speed-pop"
          id="speedPop"
        >
          SPEED UP
        </div>


        <!-- Miss popup -->
        <div
          class="miss-pop"
          id="missPop"
        >
          MISS
        </div>


        <!-- Shuttle -->
        <div
          class="shuttle"
          id="shuttle"
          role="button"
          aria-label="Hit the shuttle"
        >

          <div class="shuttle-feathers">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div class="shuttle-head"></div>

        </div>

      </div>


      <div
        class="game-instruction"
        id="gameInstruction"
      >
        GET READY
      </div>

    </section>


    <!-- =====================================================
         VERDICT
    ====================================================== -->

    <section
      class="verdict-screen"
      id="verdictScreen"
    >

      <div class="verdict-content">

        <div class="verdict-label">
          MOONLIT VERDICT
        </div>

        <div class="verdict-score-label">
          FINAL SCORE
        </div>

        <div
          class="verdict-score"
          id="finalScore"
        >
          0
        </div>

        <div
          class="verdict-rank"
          id="finalRank"
        >
          NOVICE
        </div>

        <div class="verdict-line"></div>

        <p
          class="verdict-message"
          id="verdictMessage"
        >
          THE TRIAL IS COMPLETE.
        </p>

        <button
          class="birthday-button"
          id="birthdayButton"
          type="button"
        >
          UNVEIL THE FINAL REVELATION
          <span>→</span>
        </button>

      </div>

    </section>


    <!-- =====================================================
         BIRTHDAY
    ====================================================== -->

    <section
      class="birthday-screen"
      id="birthdayScreen"
    >

      <div class="birthday-content">

        <div class="birthday-eyebrow">
          29 · 09 · XXIX
        </div>

        <h2>
          HAPPY
          <span>BIRTHDAY</span>
        </h2>

        <div class="birthday-name">
          JAY BHAIYA
        </div>

        <div class="birthday-line"></div>

        <p>
          ANOTHER YEAR.
          <br>
          ANOTHER LEVEL.
        </p>

        <div class="birthday-final">
          THE NIGHT IS YOURS.
        </div>

      </div>

    </section>

  </main>
`


/* =========================================================
   ELEMENTS
========================================================= */

const hero = document.querySelector('#hero')
const domainScreen = document.querySelector('#domainScreen')
const trialScreen = document.querySelector('#trialScreen')
const gameScreen = document.querySelector('#gameScreen')
const verdictScreen = document.querySelector('#verdictScreen')
const birthdayScreen = document.querySelector('#birthdayScreen')

const enterButton = document.querySelector('#enterButton')
const continueButton = document.querySelector('#continueButton')
const trialButton = document.querySelector('#trialButton')
const birthdayButton = document.querySelector('#birthdayButton')

const court = document.querySelector('#court')
const shuttle = document.querySelector('#shuttle')

const playerRacket = document.querySelector('#playerRacket')
const opponentRacket = document.querySelector('#opponentRacket')

const hitEffect = document.querySelector('#hitEffect')
const scorePop = document.querySelector('#scorePop')
const speedPop = document.querySelector('#speedPop')
const missPop = document.querySelector('#missPop')

const scoreElement = document.querySelector('#score')
const gameRank = document.querySelector('#gameRank')
const gameInstruction = document.querySelector('#gameInstruction')

const finalScore = document.querySelector('#finalScore')
const finalRank = document.querySelector('#finalRank')
const verdictMessage = document.querySelector('#verdictMessage')


/* =========================================================
   GAME STATE
========================================================= */

let score = 0

const LEGEND_SCORE = 15

let gameRunning = false
let canHit = false
let shuttleMoving = false
let rallyTween = null
let rallySpeed = 1
let lastDirection = 'right'
let gameFinished = false
let birthdayUnlocked = false


/* =========================================================
   INITIAL VISIBILITY
========================================================= */

gsap.set(
  [
    domainScreen,
    trialScreen,
    gameScreen,
    verdictScreen,
    birthdayScreen
  ],
  {
    autoAlpha: 0,
    pointerEvents: 'none'
  }
)


/*
  The birthday button starts completely locked.

  We explicitly control:
  - opacity
  - visibility
  - pointer interaction
*/

gsap.set(
  birthdayButton,
  {
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    y: 20
  }
)


/* =========================================================
   BACKGROUND
========================================================= */

gsap.to('.stars-1', {
  x: -25,
  y: 15,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.stars-2', {
  x: 30,
  y: -20,
  duration: 24,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.stars-3', {
  x: -20,
  y: -25,
  duration: 30,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.moon-glow', {
  scale: 1.08,
  opacity: 0.85,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.cloud-1', {
  x: 80,
  duration: 22,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.cloud-2', {
  x: -100,
  duration: 28,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.cloud-3', {
  x: 60,
  duration: 34,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})


/* =========================================================
   OPENING
========================================================= */

enterButton.addEventListener('click', () => {

  gsap.to(hero, {
    autoAlpha: 0,
    scale: 0.94,
    y: -40,
    duration: 0.8,
    ease: 'power3.inOut'
  })

  gsap.to(domainScreen, {
    autoAlpha: 1,
    pointerEvents: 'auto',
    duration: 1,
    delay: 0.35,
    ease: 'power3.out'
  })

  gsap.fromTo(
    '.domain-content',
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.45,
      ease: 'power3.out'
    }
  )
})


/* =========================================================
   DOMAIN I
========================================================= */

continueButton.addEventListener('click', () => {

  gsap.to('.domain-content', {
    y: -35,
    opacity: 0,
    duration: 0.55,
    ease: 'power2.in'
  })

  gsap.to(domainScreen, {
    autoAlpha: 0,
    pointerEvents: 'none',
    duration: 0.8,
    delay: 0.15
  })

  gsap.to(trialScreen, {
    autoAlpha: 1,
    pointerEvents: 'auto',
    duration: 0.9,
    delay: 0.45,
    ease: 'power3.out'
  })

  gsap.fromTo(
    '.trial-content',
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.55,
      ease: 'power3.out'
    }
  )
})


/* =========================================================
   DOMAIN II → GAME
========================================================= */

trialButton.addEventListener('click', () => {

  gsap.to('.trial-content', {
    y: -40,
    opacity: 0,
    duration: 0.5
  })

  gsap.to(trialScreen, {
    autoAlpha: 0,
    pointerEvents: 'none',
    duration: 0.7
  })

  gsap.to(gameScreen, {
    autoAlpha: 1,
    pointerEvents: 'auto',
    duration: 0.8,
    delay: 0.45,
    onComplete: startGame
  })
})


/* =========================================================
   RANK
========================================================= */

function getRank(value) {

  if (value >= LEGEND_SCORE) {
    return 'LEGEND'
  }

  if (value >= 10) {
    return 'MASTER'
  }

  if (value >= 6) {
    return 'ELITE'
  }

  if (value >= 3) {
    return 'WARRIOR'
  }

  return 'NOVICE'
}


/* =========================================================
   VERDICT MESSAGE
========================================================= */

function getVerdictMessage(value) {

  if (value >= LEGEND_SCORE) {
    return 'THE MOONLIT COURT RECOGNIZES A LEGEND.'
  }

  if (value >= 10) {
    return 'PRECISION. SPEED. CONTROL. MASTERED.'
  }

  if (value >= 6) {
    return 'THE TRIAL HAS BEEN CONQUERED.'
  }

  if (value >= 3) {
    return 'THE NIGHT HAS TAKEN NOTICE.'
  }

  return 'THE TRIAL IS COMPLETE.'
}


/* =========================================================
   START GAME
========================================================= */

function startGame() {

  score = 0
  rallySpeed = 1

  gameRunning = false
  gameFinished = false
  canHit = false
  shuttleMoving = false
  lastDirection = 'right'
  birthdayUnlocked = false

  scoreElement.textContent = '0'
  gameRank.textContent = 'NOVICE'
  gameInstruction.textContent = 'GET READY'


  /*
    Reset the birthday button for a fresh playthrough.
  */

  gsap.killTweensOf(birthdayButton)

  gsap.set(
    birthdayButton,
    {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      y: 20
    }
  )


  /*
    Reset shuttle.
  */

  gsap.set(shuttle, {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    opacity: 0,
    pointerEvents: 'auto'
  })


  gsap.set(
    [
      hitEffect,
      scorePop,
      speedPop,
      missPop
    ],
    {
      opacity: 0
    }
  )


  gsap.fromTo(
    court,
    {
      scale: 0.94,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }
  )


  gsap.fromTo(
    '.game-header',
    {
      y: -20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7
    }
  )


  countdown()
}


/* =========================================================
   COUNTDOWN
========================================================= */

function countdown() {

  const values = ['3', '2', '1', 'GO']

  let index = 0

  const element = document.createElement('div')

  element.className = 'game-countdown'

  gameScreen.appendChild(element)


  function next() {

    if (index >= values.length) {

      element.remove()

      gameRunning = true

      gameInstruction.textContent =
        'RETURN THE SHUTTLE'

      opponentServe()

      return
    }


    element.textContent =
      values[index]


    gsap.fromTo(
      element,
      {
        scale: 1.6,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',

        onComplete: () => {

          gsap.to(element, {
            scale: 0.7,
            opacity: 0,
            duration: 0.35,
            delay: 0.2,

            onComplete: () => {

              index++

              next()

            }
          })

        }
      }
    )
  }


  next()
}


/* =========================================================
   COURT POSITIONS
========================================================= */

function getPositions() {

  const width =
    court.clientWidth

  const height =
    court.clientHeight


  return {
    leftX: width * 0.14,
    rightX: width * 0.86,
    centerY: height * 0.5,
    minY: height * 0.2,
    maxY: height * 0.8
  }
}


/* =========================================================
   SPEED SYSTEM
========================================================= */

function updateSpeed() {

  const oldSpeed =
    rallySpeed


  rallySpeed =
    1 +
    Math.floor(score / 3) * 0.16


  if (
    rallySpeed > oldSpeed &&
    score > 0
  ) {

    showSpeedUp()

  }
}


/* =========================================================
   FLIGHT DURATION
========================================================= */

function getFlightDuration() {

  return Math.max(
    0.42,
    1.15 / rallySpeed
  )
}


/* =========================================================
   OPPONENT SERVE
========================================================= */

function opponentServe() {

  if (!gameRunning || gameFinished) {
    return
  }


  const {
    leftX,
    rightX,
    centerY,
    minY,
    maxY
  } = getPositions()


  const startY =
    centerY +
    (Math.random() * 100 - 50)


  const targetY =
    minY +
    Math.random() *
    (maxY - minY)


  gsap.set(shuttle, {
    x: rightX,
    y: startY,
    rotation: -25,
    opacity: 1,
    pointerEvents: 'auto'
  })


  animateRacket(opponentRacket)


  canHit = false
  shuttleMoving = true
  lastDirection = 'left'


  const duration =
    getFlightDuration()


  rallyTween =
    gsap.to(shuttle, {

      x: leftX,
      y: targetY,
      rotation: -65,

      duration,

      ease: 'power1.inOut',

      onComplete: () => {

        shuttleMoving = false

        if (!canHit) {
          playerMiss()
        }

      }
    })
}


/* =========================================================
   PLAYER RETURN
========================================================= */

function playerReturn() {

  if (!gameRunning || gameFinished) {
    return
  }


  const {
    rightX,
    minY,
    maxY
  } = getPositions()


  const targetY =
    minY +
    Math.random() *
    (maxY - minY)


  canHit = false
  shuttleMoving = true
  lastDirection = 'right'


  animateRacket(playerRacket)


  const duration =
    getFlightDuration()


  rallyTween =
    gsap.to(shuttle, {

      x: rightX,
      y: targetY,
      rotation: 115,

      duration,

      ease: 'power1.inOut',

      onComplete: () => {

        shuttleMoving = false

        setTimeout(() => {

          if (
            gameRunning &&
            !gameFinished
          ) {

            opponentReturn()

          }

        }, 90)

      }
    })
}


/* =========================================================
   OPPONENT RETURN
========================================================= */

function opponentReturn() {

  if (!gameRunning || gameFinished) {
    return
  }


  const {
    leftX,
    minY,
    maxY
  } = getPositions()


  const targetY =
    minY +
    Math.random() *
    (maxY - minY)


  animateRacket(opponentRacket)


  canHit = false
  shuttleMoving = true
  lastDirection = 'left'


  const duration =
    getFlightDuration()


  rallyTween =
    gsap.to(shuttle, {

      x: leftX,
      y: targetY,
      rotation: 295,

      duration,

      ease: 'power1.inOut',

      onComplete: () => {

        shuttleMoving = false

        if (!canHit) {
          playerMiss()
        }

      }
    })
}


/* =========================================================
   SHUTTLE HIT
========================================================= */

function hitShuttle(event) {

  event.preventDefault()
  event.stopPropagation()


  if (
    !gameRunning ||
    gameFinished ||
    !shuttleMoving ||
    lastDirection !== 'left'
  ) {

    return
  }


  canHit = true
  shuttleMoving = false


  if (rallyTween) {
    rallyTween.kill()
    rallyTween = null
  }


  /* =======================================================
     SCORE
  ======================================================= */

  score++

  scoreElement.textContent =
    score

  gameRank.textContent =
    getRank(score)

  updateSpeed()


  const x =
    gsap.getProperty(shuttle, 'x')

  const y =
    gsap.getProperty(shuttle, 'y')


  /* =======================================================
     HIT EFFECT
  ======================================================= */

  gsap.set(hitEffect, {
    x,
    y,
    opacity: 1,
    scale: 0.2
  })


  gsap.to(hitEffect, {
    scale: 3,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out'
  })


  /* =======================================================
     SCORE POPUP
  ======================================================= */

  gsap.set(scorePop, {
    x,
    y,
    opacity: 1,
    scale: 0.6
  })


  gsap.to(scorePop, {
    y: y - 55,
    scale: 1,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  })


  /* =======================================================
     SHUTTLE IMPACT
  ======================================================= */

  gsap.to(shuttle, {
    scale: 1.35,
    duration: 0.08,
    yoyo: true,
    repeat: 1
  })


  /* =======================================================
     SCORE PULSE
  ======================================================= */

  gsap.fromTo(
    scoreElement,
    {
      scale: 1.3
    },
    {
      scale: 1,
      duration: 0.25,
      ease: 'power2.out'
    }
  )


  /* =======================================================
     LEGEND CHECK
  ======================================================= */

  if (score >= LEGEND_SCORE) {

    gameInstruction.textContent =
      'LEGEND'


    setTimeout(() => {

      if (!gameFinished) {
        endGame()
      }

    }, 350)


    return
  }


  /* =======================================================
     NORMAL RETURN
  ======================================================= */

  setTimeout(() => {

    if (
      gameRunning &&
      !gameFinished
    ) {

      playerReturn()

    }

  }, 80)
}


/* =========================================================
   PLAYER MISS
========================================================= */

function playerMiss() {

  if (!gameRunning || gameFinished) {
    return
  }


  canHit = false
  shuttleMoving = false


  gsap.set(missPop, {
    x: gsap.getProperty(shuttle, 'x'),
    y: gsap.getProperty(shuttle, 'y'),
    opacity: 1,
    scale: 0.7
  })


  gsap.to(missPop, {
    y: '-=35',
    opacity: 0,
    scale: 1,
    duration: 0.7
  })


  gameInstruction.textContent =
    'MISS • RESETTING RALLY'


  gsap.to(shuttle, {
    opacity: 0,
    duration: 0.15,

    onComplete: () => {

      setTimeout(() => {

        if (
          gameRunning &&
          !gameFinished
        ) {

          gameInstruction.textContent =
            'RETURN THE SHUTTLE'

          opponentServe()

        }

      }, 500)

    }
  })
}


/* =========================================================
   SPEED UP EFFECT
========================================================= */

function showSpeedUp() {

  speedPop.textContent =
    'SPEED UP'


  gsap.fromTo(
    speedPop,
    {
      scale: 0.6,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: 'back.out(1.7)',

      onComplete: () => {

        gsap.to(speedPop, {
          y: -30,
          opacity: 0,
          duration: 0.7
        })

      }
    }
  )


  gsap.fromTo(
    court,
    {
      boxShadow:
        'inset 0 0 120px rgba(170, 155, 255, 0.35), 0 0 80px rgba(130, 110, 255, 0.3)'
    },
    {
      boxShadow:
        'inset 0 0 80px rgba(90, 75, 180, 0.08), 0 0 50px rgba(80, 65, 170, 0.08)',
      duration: 0.45
    }
  )
}


/* =========================================================
   RACKET ANIMATION
========================================================= */

function animateRacket(racket) {

  gsap.killTweensOf(racket)


  gsap.fromTo(
    racket,
    {
      rotation: -18,
      scale: 0.92
    },
    {
      rotation: 18,
      scale: 1.05,
      duration: 0.12,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    }
  )
}


/* =========================================================
   SHUTTLE EVENT
========================================================= */

shuttle.addEventListener(
  'pointerdown',
  hitShuttle
)


/* =========================================================
   END GAME
========================================================= */

function endGame() {

  if (gameFinished) {
    return
  }


  gameFinished = true
  gameRunning = false
  canHit = false
  shuttleMoving = false


  if (rallyTween) {
    rallyTween.kill()
    rallyTween = null
  }


  gameInstruction.textContent =
    'LEGEND'


  gsap.set(shuttle, {
    pointerEvents: 'none'
  })


  gsap.to(shuttle, {
    opacity: 0,
    scale: 0.5,
    duration: 0.3
  })


  gsap.to(court, {
    scale: 0.96,
    opacity: 0,
    duration: 0.65,
    ease: 'power3.in'
  })


  setTimeout(
    showVerdict,
    650
  )
}


/* =========================================================
   VERDICT
========================================================= */

function showVerdict() {

  const rank =
    getRank(score)


  finalScore.textContent =
    '0'

  finalRank.textContent =
    rank

  verdictMessage.textContent =
    getVerdictMessage(score)


  birthdayUnlocked = false


  /*
    Kill anything previously controlling
    the birthday button.
  */

  gsap.killTweensOf(birthdayButton)


  /*
    HARD RESET

    This guarantees that the button begins
    hidden before the verdict animation.
  */

  gsap.set(
    birthdayButton,
    {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      y: 20,
      scale: 1
    }
  )


  /* =======================================================
     SCREEN TRANSITION
  ======================================================= */

  gsap.to(gameScreen, {
    autoAlpha: 0,
    pointerEvents: 'none',
    duration: 0.5
  })


  gsap.to(verdictScreen, {
    autoAlpha: 1,
    pointerEvents: 'auto',
    duration: 1,
    delay: 0.2
  })


  /* =======================================================
     SCORE COUNT-UP
  ======================================================= */

  const scoreObject = {
    value: 0
  }


  gsap.to(scoreObject, {
    value: score,
    duration: 1.5,
    delay: 0.5,
    ease: 'power2.out',

    onUpdate: () => {

      finalScore.textContent =
        Math.floor(scoreObject.value)

    }
  })


  /* =======================================================
     LEGEND ANIMATION
  ======================================================= */

  gsap.fromTo(
    '.verdict-rank',
    {
      scale: 1.8,
      opacity: 0,
      y: 25
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 1.25,
      ease: 'back.out(1.7)'
    }
  )


  /* =======================================================
     LINE
  ======================================================= */

  gsap.fromTo(
    '.verdict-line',
    {
      scaleX: 0
    },
    {
      scaleX: 1,
      duration: 0.8,
      delay: 1.55
    }
  )


  /* =======================================================
     MESSAGE
  ======================================================= */

  gsap.fromTo(
    '.verdict-message',
    {
      y: 20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 1.75
    }
  )


  /* =======================================================
     FINAL REVELATION BUTTON
  ======================================================= */

  /*
    Use a separate timeline.

    This is more reliable than mixing delayed
    visibility changes with several independent tweens.
  */

  const revealTimeline =
    gsap.timeline({
      delay: 2.35
    })


  revealTimeline.set(
    birthdayButton,
    {
      visibility: 'visible',
      pointerEvents: 'auto'
    }
  )


  revealTimeline.to(
    birthdayButton,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',

      onStart: () => {

        birthdayUnlocked = true

      }
    }
  )


  /*
    Safety check.

    After the animation finishes, explicitly
    force the button into its usable state.
  */

  revealTimeline.set(
    birthdayButton,
    {
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto'
    }
  )
}


/* =========================================================
   BIRTHDAY REVEAL
========================================================= */

birthdayButton.addEventListener(
  'click',
  () => {

    if (
      score < LEGEND_SCORE ||
      !birthdayUnlocked
    ) {
      return
    }


    /*
      Lock the button immediately so it cannot
      trigger the reveal twice.
    */

    birthdayUnlocked = false

    gsap.set(
      birthdayButton,
      {
        pointerEvents: 'none'
      }
    )


    /* =====================================================
       VERDICT → BIRTHDAY
    ===================================================== */

    gsap.to(verdictScreen, {
      autoAlpha: 0,
      pointerEvents: 'none',
      scale: 0.96,
      duration: 0.8
    })


    gsap.to(birthdayScreen, {
      autoAlpha: 1,
      pointerEvents: 'auto',
      duration: 1.2,
      delay: 0.35
    })


    /* =====================================================
       BIRTHDAY EYEBROW
    ===================================================== */

    gsap.fromTo(
      '.birthday-eyebrow',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.65
      }
    )


    /* =====================================================
       HAPPY BIRTHDAY
    ===================================================== */

    gsap.fromTo(
      '.birthday-content h2',
      {
        y: 50,
        opacity: 0,
        scale: 0.94
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.75
      }
    )


    /* =====================================================
       JAY BHAIYA
    ===================================================== */

    gsap.fromTo(
      '.birthday-name',
      {
        scale: 1.4,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1.05,
        ease: 'back.out(1.5)'
      }
    )


    /* =====================================================
       LINE
    ===================================================== */

    gsap.fromTo(
      '.birthday-line',
      {
        scaleX: 0
      },
      {
        scaleX: 1,
        duration: 0.8,
        delay: 1.4
      }
    )


    /* =====================================================
       MESSAGE
    ===================================================== */

    gsap.fromTo(
      '.birthday-content p',
      {
        y: 25,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.55
      }
    )


    /* =====================================================
       FINAL LINE
    ===================================================== */

    gsap.fromTo(
      '.birthday-final',
      {
        y: 25,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 1.9
      }
    )

  }
)


/* =========================================================
   MOUSE PARALLAX
========================================================= */

window.addEventListener(
  'pointermove',
  (event) => {

    const x =
      (
        event.clientX /
        window.innerWidth -
        0.5
      ) * 2


    const y =
      (
        event.clientY /
        window.innerHeight -
        0.5
      ) * 2


    gsap.to('.moon', {
      x: x * 10,
      y: y * 8,
      duration: 1.5,
      ease: 'power2.out'
    })


    gsap.to('.stars-1', {
      x: x * 12,
      y: y * 8,
      duration: 1.8
    })


    gsap.to('.stars-2', {
      x: x * -18,
      y: y * -12,
      duration: 2
    })


    gsap.to('.stars-3', {
      x: x * 25,
      y: y * 18,
      duration: 2.2
    })

  }
)


/* =========================================================
   BUTTON HOVER
========================================================= */

document
  .querySelectorAll('button')
  .forEach((button) => {

    button.addEventListener(
      'pointerenter',
      () => {

        gsap.to(button, {
          y: -3,
          scale: 1.03,
          duration: 0.25
        })

      }
    )


    button.addEventListener(
      'pointerleave',
      () => {

        gsap.to(button, {
          y: 0,
          scale: 1,
          duration: 0.25
        })

      }
    )

  })


/* =========================================================
   RESPONSIVE
========================================================= */

window.addEventListener(
  'resize',
  () => {

    if (
      gameRunning &&
      !shuttleMoving &&
      !gameFinished
    ) {

      opponentServe()

    }

  }
)