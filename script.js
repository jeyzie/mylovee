

    /*   THREE-QUESTION FRONT PAGE */

    const questionScreen =
      document.getElementById(
        "questionScreen"
      );

    const questionInput =
      document.getElementById(
        "questionInput"
      );

    const questionButton =
      document.getElementById(
        "questionButton"
      );

    const questionError =
      document.getElementById(
        "questionError"
      );

    const questionStep =
      document.getElementById(
        "questionStep"
      );

    const questionText =
      document.getElementById(
        "questionText"
      );

    const questions = [
      {
        question:
          "Sino ang Fav Mo?",
        answers:[
          "mylo",
          "you",
          "ikaw",
          "brow"
        ]
      },

      {
        question:
            "kelan tayo naging tayo?",
        answers: [
            "december 19, 2024",
            "dec 19, 2024",
            "dec 19 2024",
            "december 19 2024",
            "12/19/2024",
            "12-19-2024"
        ]
      },

      {
        question:
          "You Love Me? ❤️",
        answers:
          ["Yes",
            "i love you",
            "of course",
            "yes i love you",
            "yes i love you so much",
            "yes i love you so much mylo",
          ]
      }
    ];

    let currentQuestion = 0;

    function normalizeAnswer(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/,/g, "")
        .replace(/\s+/g, " ");
    }

    function updateQuestion() {
      const item =
        questions[currentQuestion];

      questionStep.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

      questionText.textContent =
        item.question;

      questionInput.value = "";

      questionError.classList.remove(
        "show"
      );

      questionButton.textContent =
        currentQuestion ===
        questions.length - 1
          ? "Open My Love Letter 💌"
          : "Next ❤️";

      setTimeout(() => {
        questionInput.focus();
      }, 50);
    }

    function wrongAnswerAnimation() {
      questionError.classList.add(
        "show"
      );

      questionInput.animate(
        [
          {
            transform:
              "translateX(0)"
          },
          {
            transform:
              "translateX(-7px)"
          },
          {
            transform:
              "translateX(7px)"
          },
          {
            transform:
              "translateX(-4px)"
          },
          {
            transform:
              "translateX(4px)"
          },
          {
            transform:
              "translateX(0)"
          }
        ],
        {
          duration:
            320
        }
      );

      questionInput.focus();
    }

    function goToNextQuestion() {
      const card =
        document.querySelector(
          ".question-card"
        );

      card.animate(
        [
          {
            opacity: 1,
            transform:
              "translateX(0)"
          },
          {
            opacity: 0,
            transform:
              "translateX(-18px)"
          }
        ],
        {
          duration:
            210,
          easing:
            "ease"
        }
      );

      setTimeout(() => {

        currentQuestion++;

        updateQuestion();

        card.animate(
          [
            {
              opacity: 0,
              transform:
                "translateX(18px)"
            },
            {
              opacity: 1,
              transform:
                "translateX(0)"
            }
          ],
          {
            duration:
              260,
            easing:
              "ease"
          }
        );

      }, 210);
    }

    function unlockLoveLetter() {

      questionError.classList.remove(
        "show"
      );

      questionScreen.classList.add(
        "hide"
      );

      setTimeout(() => {
        questionScreen.style.display =
          "none";
      }, 900);
    }

    function checkQuestion() {

      const answer =
        normalizeAnswer(questionInput.value);

      const correctAnswers =
        questions[currentQuestion].answers
            ? questions[currentQuestion].answers.map(normalizeAnswer)
            : [normalizeAnswer(questions[currentQuestion].answer)];

        if (!correctAnswers.includes(answer)) {
        wrongAnswerAnimation();
        return;
      }

      questionError.classList.remove("show");

      if (currentQuestion < questions.length - 1) {
        goToNextQuestion();
      } else {
        unlockLoveLetter();
      }
    }

    questionButton.addEventListener(
      "click",
      checkQuestion
    );

    questionInput.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "Enter"
        ) {
          checkQuestion();
        }
      }
    );

    updateQuestion();



    /* =====================================================
       ELEMENTS
    ====================================================== */

    const scene =
      document.getElementById(
        "scene"
      );

    const music =
      document.getElementById(
        "music"
      );

    const musicSource =
      document.getElementById(
        "musicSource"
      );

    const letter =
      document.getElementById(
        "letter"
      );

    const playBtn =
      document.getElementById(
        "playBtn"
      );

    const progress =
      document.getElementById(
        "progress"
      );

    const volume =
      document.getElementById(
        "volume"
      );

    const currentTimeText =
      document.getElementById(
        "currentTime"
      );

    const durationText =
      document.getElementById(
        "duration"
      );

    const albumCover =
      document.getElementById(
        "albumCover"
      );

    const trackTitle =
      document.getElementById(
        "trackTitle"
      );

    const trackArtist =
      document.getElementById(
        "trackArtist"
      );


    let opened =
      false;


    let currentSong =
      0;


    /* =====================================================
       PLAYLIST
       
       Add more songs here whenever you want.
    ====================================================== */

    const songs = [

      {
        src:
          "assets/audio/kaygandamo.mp3",

        title:
          "Kay Ganda Mo",

        artist:
          "This song reminds me of you during our dorm days.❤️"
      },

      {
        src:
          "assets/audio/mayakanauwi.mp3",

        title:
          "Maya Kana Uwi",

        artist:
          "I still remember your OTJ moments—hatid, then uwi 😭"
      },

      {
        src:
          "assets/audio/Libu Libong Buwan.mp3",
        title:
          "Libu Libong Buwan",
        artist:
          "and this song is our journey of love even we fight sometimes, but we still go back to each other."
      }

    ];


    /* =====================================================
       ALBUM IMAGES
       
       These change every 10 seconds.
    ====================================================== */

    const albumImages = [
      "assets/image/img1.jpg",
      "assets/image/img2.jpg",
      "assets/image/img3.jpg",
      "assets/image/img4.jpg",
      "assets/image/img5.jpg"

    ];


    let currentImage =
      0;


    /* =====================================================
       LOAD SONG
    ====================================================== */

    function loadSong(
      index,
      autoplay = false
    ) {

      currentSong =
        (
          index +
          songs.length
        )
        % songs.length;


      /*
        Change music source.
      */
      musicSource.src =
        songs[currentSong].src;


      /*
        Reload audio.
      */
      music.load();


      /*
        Update title.
      */
      trackTitle.textContent =
        songs[currentSong].title;


      /*
        Update artist.
      */
     const artistText =
      String(
        songs[currentSong].artist
      );

    trackArtist.innerHTML = "";

    const marquee =
      document.createElement("span");

    marquee.className =
      "artist-marquee";

    const firstArtist =
      document.createElement("span");

    firstArtist.className =
      "artist-text";

    firstArtist.textContent =
      artistText;

    const secondArtist =
      document.createElement("span");

    secondArtist.className =
      "artist-text";

    secondArtist.setAttribute(
      "aria-hidden",
      "true"
    );

    secondArtist.textContent =
      artistText;

    marquee.appendChild(
      firstArtist
    );

    marquee.appendChild(
      secondArtist
    );

    trackArtist.appendChild(
      marquee
    );


      /*
        Reset progress.
      */
      progress.value =
        0;


      currentTimeText.textContent =
        "0:00";


      durationText.textContent =
        "0:00";


      /*
        Automatically play if requested.
      */
      if (
        autoplay
      ) {

        music
          .play()
          .catch(() => {});

      }

    }


    /* =====================================================
       IMAGE ROTATION

       Change every 10 seconds.
       Fade duration: 5 seconds.
    ====================================================== */

    setInterval(
      () => {

        albumCover.style.opacity =
          "0";

        setTimeout(
          () => {

            currentImage =
              (currentImage + 1)
              %
              albumImages.length;

            albumCover.src =
              albumImages[currentImage];

            /*
              Start hidden, then fade in smoothly.
            */
            albumCover.style.opacity =
              "0";

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                albumCover.style.opacity =
                  "1";
              });
            });

          },
          1000
        );

      },
      5000
    );


    /* =====================================================
       RESPONSIVE SCALING
    ====================================================== */

    function resizeScene() {

      const designWidth =
        980;

      const designHeight =
        680;

      const margin =
        24;

      const availableWidth =
        window.innerWidth -
        margin;

      const availableHeight =
        window.innerHeight -
        margin;

      const widthScale =
        availableWidth /
        designWidth;

      const heightScale =
        availableHeight /
        designHeight;

      const maxScale =
        1.33;


      let scale =
        Math.min(
          widthScale,
          heightScale,
          maxScale
        );


      scale =
        Math.max(
          scale,
          0.35
        );


      scene.style.setProperty(
        "--scene-scale",
        scale
      );

    }


    resizeScene();


    window.addEventListener(
      "resize",
      resizeScene
    );


    window.addEventListener(
      "orientationchange",
      () => {

        setTimeout(
          resizeScene,
          100
        );

      }
    );


    /* =====================================================
       TIME FORMAT
    ====================================================== */

    function formatTime(
      seconds
    ) {

      if (
        !Number.isFinite(
          seconds
        )
      ) {

        return "0:00";
      }


      const minutes =
        Math.floor(
          seconds / 60
        );


      const secs =
        Math.floor(
          seconds % 60
        );


      return (
        minutes +
        ":" +
        secs
          .toString()
          .padStart(
            2,
            "0"
          )
      );

    }


    /* =====================================================
       PLAY / PAUSE
    ====================================================== */

    playBtn.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();


        if (
          music.paused
        ) {

          music
            .play()
            .catch(() => {});

        } else {

          music.pause();

        }

      }
    );


    /* =====================================================
       NEXT SONG
    ====================================================== */

    document
      .getElementById(
        "nextBtn"
      )
      .addEventListener(
        "click",
        (event) => {

          event.stopPropagation();


          currentSong =
            (
              currentSong +
              1
            )
            %
            songs.length;


          loadSong(
            currentSong,
            true
          );

        }
      );


    /* =====================================================
       PREVIOUS SONG
    ====================================================== */

    document
      .getElementById(
        "prevBtn"
      )
      .addEventListener(
        "click",
        (event) => {

          event.stopPropagation();


          currentSong =
            (
              currentSong -
              1 +
              songs.length
            )
            %
            songs.length;


          loadSong(
            currentSong,
            true
          );

        }
      );


    /* =====================================================
       AUTOMATIC NEXT SONG
    ====================================================== */

    music.addEventListener(
      "ended",
      () => {

        currentSong =
          (
            currentSong +
            1
          )
          %
          songs.length;


        loadSong(
          currentSong,
          true
        );

      }
    );


    /* =====================================================
       PLAY STATE
    ====================================================== */

    music.addEventListener(
      "play",
      () => {

        playBtn.textContent =
          "❚❚";

      }
    );


    music.addEventListener(
      "pause",
      () => {

        playBtn.textContent =
          "▶";

      }
    );


    /* =====================================================
       PROGRESS UPDATE
    ====================================================== */

    music.addEventListener(
      "timeupdate",
      () => {

        if (
          Number.isFinite(
            music.duration
          )
        ) {

          progress.value =
            (
              music.currentTime /
              music.duration
            )
            *
            100;

        }


        currentTimeText.textContent =
          formatTime(
            music.currentTime
          );

      }
    );


    /* =====================================================
       SONG DURATION
    ====================================================== */

    music.addEventListener(
      "loadedmetadata",
      () => {

        durationText.textContent =
          formatTime(
            music.duration
          );

      }
    );


    /* =====================================================
       SEEK
    ====================================================== */

    progress.addEventListener(
      "input",
      () => {

        if (
          Number.isFinite(
            music.duration
          )
        ) {

          music.currentTime =
            (
              progress.value /
              100
            )
            *
            music.duration;

        }

      }
    );


    progress.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

      }
    );


    /* =====================================================
       VOLUME
    ====================================================== */

    music.volume =
      0.8;


    volume.addEventListener(
      "input",
      () => {

        music.volume =
          Number(
            volume.value
          );

      }
    );


    volume.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

      }
    );


    /* =====================================================
       FOLDER OPEN / CLOSE
    ====================================================== */

    scene.addEventListener(
      "click",
      (event) => {

        /*
          Don't trigger folder when
          music player is clicked.
        */
        if (
          event.target.closest(
            ".music-player"
          )
        ) {

          return;
        }


        opened =
          !opened;


        if (opened) {

          /*
            Open folder.
          */
          scene.classList.add(
            "open"
          );


          /*
            Start current song.
          */
          music
            .play()
            .catch(() => {});

        } else {

          scene.classList.remove(
            "open"
          );


          /*
            Pause music.
          */
          music.pause();

        }

      }
    );


    /* =====================================================
       INITIAL SONG
    ====================================================== */

    loadSong(
      0,
      false
    );

