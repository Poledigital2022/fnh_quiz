$(document).ready(function () {
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var etat = 0;
  var val1;
  var user = { genre: "", nom: "", prenom: "", email: "", tel: "" };
  var reponses = { qes1: "", qes2: "", qes3: "", qes4: "" };
  var letInfo = true;
  var a = 0,
    b = 0,
    c = 0;
  function getUserInfo(genre, nom, prenom, email, tel) {
    user.genre = genre;
    user.nom = nom;
    user.prenom = prenom;
    user.email = email;
    user.tel = tel;
    // console.log(user);
  }
  function getReponses(qes, rep) {
    if (qes === 1) {
      reponses.qes1 = rep;
    }
    if (qes === 2) {
      reponses.qes2 = rep;
    }
    if (qes === 3) {
      reponses.qes3 = rep;
    }
    if (qes === 4) {
      reponses.qes4 = rep;
    }
    if (qes === 5) {
      reponses.qes5 = rep;
    }
  }
  function moveToQuiz() {
    /*start*/
    $(".qes-progress").addClass("d-flex");
    $("#error").text("");
    etat = 1;

    if (etat === 0) {
      $("#main").removeClass("qes1");
      $("#main").removeClass("qes2");
    } else if (etat === 1) {
      $("#main").addClass("qes1");
      $("#main").removeClass("qes2");
      $(".home-container").addClass("d-none");
      $("#qes1-container").removeClass("d-none");
    } else if (etat === 2) {
      $("#main").removeClass("qes1");
      $("#main").addClass("qes2");
    }
    /*end*/
  }
  /**/
  function filterReponses() {
    /*A*/
    if (reponses.qes1 === "reponse1") {
      a = a + 1;
    }
    if (reponses.qes2 === "reponse1") {
      a = a + 1;
    }
    if (reponses.qes3 === "reponse1") {
      a = a + 1;
    }
    if (reponses.qes4 === "reponse1") {
      a = a + 1;
    }
    if (reponses.qes5 === "reponse1") {
      a = a + 1;
    }
    /*B*/
    if (reponses.qes1 === "reponse2") {
      b = b + 1;
    }
    if (reponses.qes2 === "reponse2") {
      b = b + 1;
    }
    if (reponses.qes3 === "reponse2") {
      b = b + 1;
    }
    if (reponses.qes4 === "reponse2") {
      b = b + 1;
    }
    if (reponses.qes5 === "reponse2") {
      b = b + 1;
    }
    /*C*/
    if (reponses.qes1 === "reponse3") {
      c = c + 1;
    }
    if (reponses.qes2 === "reponse3") {
      c = c + 1;
    }
    if (reponses.qes3 === "reponse3") {
      c = c + 1;
    }
    if (reponses.qes4 === "reponse3") {
      c = c + 1;
    }
    if (reponses.qes5 === "reponse3") {
      c = c + 1;
    }
    // console.log(reponses);
    // console.log(user);
    $("#name1").text(user.prenom);
    if (a >= b && a > c) {
      if (user.genre === "Femme") {
        $("#main").addClass("resultat-box2");
        $("#text1").text("Vous êtes une actrice convaincue de l’écologie");
        $("#text2").text(
          "Tout comme nos écoacteurs, vous connaissez bien les enjeux écologiques et les menaces qui pèsent sur l’environnement. Vous êtes très bien renseignée et vous vous engagez avec conviction dans plusieurs domaines car vous êtes consciente qu’il est indispensable d’opérer chacun à notre niveau un changement profond de nos sociétés pour préserver la nature, la solidarité et le bien-être de tous les êtres vivant sur Terre."
        );
      } else if (user.genre === "Homme") {
        $("#main").addClass("resultat-box1");
        $("#text1").text("Vous êtes un acteur convaincu de l’écologie");
        $("#text2").text(
          "Tout comme nos écoacteurs, vous connaissez bien les enjeux écologiques et les menaces qui pèsent sur l’environnement. Vous êtes très bien renseigné et vous vous engagez avec conviction dans plusieurs domaines car vous êtes conscient qu’il est indispensable d’opérer chacun à notre niveau un changement profond de nos sociétés pour préserver la nature, la solidarité et le bien-être de tous les êtres vivant sur Terre."
        );
      } else {
        $("#main").addClass("resultat-box1");
        $("#text1").text(
          "Vous êtes un acteur ou une actrice convaincu.e de l’écologie"
        );
        $("#text2").text(
          "Tout comme nos écoacteurs, vous connaissez bien les enjeux écologiques et les menaces qui pèsent sur l’environnement. Vous êtes très bien renseigné.e et vous vous engagez avec conviction dans plusieurs domaines car vous êtes conscient.e qu’il est indispensable d’opérer chacun à notre niveau un changement profond de nos sociétés pour préserver la nature, la solidarité et le bien-être de tous les êtres vivant sur Terre."
        );
      }
    } else if (b > a && b >= c) {
      if (user.genre === "Femme") {
        $("#main").addClass("resultat-box4");
        $("#text1").text("Vous êtes une actrice en devenir de l’écologie");
        $("#text2").text(
          "Votre curiosité vous honore et même si vous pensez ne pas vous impliquer suffisamment dans la défense de l’environnement, vous êtes sur la bonne voie. Vous avez simplement besoin de vous sentir davantage impliquée dans la cause écologique en faisant des actions concrètes dont la portée vous paraît évidente. Ensemble, nous pouvons créer les conditions favorables d’un engagement pour un changement profond de nos sociétés pour préserver la nature, la solidarité et le bien-être de tous les êtres vivant sur Terre."
        );
      } else if (user.genre === "Homme") {
        $("#main").addClass("resultat-box3");
        $("#text1").text("Vous êtes un acteur en devenir de l’écologie");
        $("#text2").text(
          "Votre curiosité vous honore et même si vous pensez ne pas vous impliquer suffisamment dans la défense de l’environnement, vous êtes sur la bonne voie. Vous avez simplement besoin de vous sentir davantage impliqué dans la cause écologique en faisant des actions concrètes dont la portée vous paraît évidente. Ensemble, nous pouvons créer les conditions favorables d’un engagement pour un changement profond de nos sociétés pour préserver la nature, la solidarité et le bien-être de tous les êtres vivant sur Terre."
        );
      } else {
        $("#main").addClass("resultat-box3");
        $("#text1").text(
          "Vous êtes un acteur ou une actrice en devenir de l’écologie"
        );
        $("#text2").text(
          "Votre curiosité vous honore et même si vous pensez ne pas vous impliquer suffisamment dans la défense de l’environnement, vous êtes sur la bonne voie. Vous avez simplement besoin de vous sentir davantage impliqué.e dans la cause écologique en faisant des actions concrètes dont la portée vous paraît évidente. Ensemble, nous pouvons créer les conditions favorables d’un engagement pour un changement profond de nos sociétés pour préserver la nature, la solidarité et le bien-être de tous les êtres vivant sur Terre."
        );
      }
    } else if (c >= a && c > b) {
      if (user.genre === "Femme") {
        $("#main").addClass("resultat-box6");
        $("#text1").text("Vous ne vous sentez pas concernée par l’écologie");
        $("#text2").text(
          "Cependant vous êtes allée jusqu’au bout de ce quiz, ce qui prouve votre intérêt pour la défense de l’environnement. Souvent, on ne se sent pas l’énergie de s’engager, car, malgré ce qu’on peut voir ou lire dans les médias, ces phénomènes paraissent trop lointains. Et ce que nous faisons semble parfois très dérisoire. Pourtant, soyez-en certaine, chaque action, aussi infime soit-elle, dans le sens d’un nouveau modèle de société, basé sur la préservation de la nature, la solidarité et le bien-être de tous les êtres vivants, compte et a des répercussions sur la collectivité."
        );
        // console.log(user.genre);
      } else if (user.genre === "Homme") {
        $("#main").addClass("resultat-box5");
        $("#text1").text("Vous ne vous sentez pas concerné par l’écologie");
        $("#text2").text(
          "Cependant vous êtes allé jusqu’au bout de ce quiz, ce qui prouve votre intérêt pour la défense de l’environnement. Souvent, on ne se sent pas l’énergie de s’engager, car, malgré ce qu’on peut voir ou lire dans les médias, ces phénomènes paraissent trop lointains. Et ce que nous faisons semble parfois très dérisoire. Pourtant, soyez-en certain, chaque action, aussi infime soit-elle, dans le sens d’un nouveau modèle de société, basé sur la préservation de la nature, la solidarité et le bien-être de tous les êtres vivants, compte et a des répercussions sur la collectivité."
        );
      } else {
        $("#main").addClass("resultat-box5");
        $("#text1").text("Vous ne vous sentez pas concerné.e par l’écologie");
        $("#text2").text(
          "Cependant vous êtes allé.e jusqu’au bout de ce quiz, ce qui prouve votre intérêt pour la défense de l’environnement. Souvent, on ne se sent pas l’énergie de s’engager, car, malgré ce qu’on peut voir ou lire dans les médias, ces phénomènes paraissent trop lointains. Et ce que nous faisons semble parfois très dérisoire. Pourtant, soyez-en certain.e, chaque action, aussi infime soit-elle, dans le sens d’un nouveau modèle de société, basé sur la préservation de la nature, la solidarité et le bien-être de tous les êtres vivants, compte et a des répercussions sur la collectivité."
        );
      }
    }
  }

  /*btn1*/
  $("#btn1").click(function () {
    // if (
    //   $("#nom").val() === "" ||
    //   $("#prenom").val() === "" ||
    //   $("#email").val() === "" ||
    //   $("#tele").val() === "" ||
    //   testEmail.test($("#email").val()) === false
    // ) {
    //   $("#error").text("Merci de remplire les champs souligné !");
    // }
    if ($("#nom").val() === "") {
      $("#boxnom").addClass("active");
    }
    if ($("#prenom").val() === "") {
      $("#boxprenom").addClass("active");
    }
    if ($("#prenom").val() === "") {
      $("#error").text("Merci de saisir un prenom");
    }
    if (testEmail.test($("#email").val()) === false) {
      $("#boxemail").addClass("active");
    }
    if ($("#tele").val() === "") {
      $("#boxtele").addClass("active");
    }
    if ($("#nom").val() !== "") {
      $("#boxnom").removeClass("active");
    }
    if ($("#nom").val() === "") {
      $("#error").text("Merci de saisir un nom");
    }
    if ($("#prenom").val() !== "") {
      $("#boxprenom").removeClass("active");
    }
    if (testEmail.test($("#email").val()) === true) {
      $("#boxemail").removeClass("active");
    }
    if ($("#tele").val() !== "") {
      $("#boxtele").removeClass("active");
    }
    if ($("#tele").val() === "") {
      $("#error").text("Merci de saisir un numéro de téléphone valide");
    }
    if (
      testEmail.test($("#email").val()) === false ||
      $("#email").val() === ""
    ) {
      $("#error").text("Merci de saisir une adresse mail valide");
    }
    if (
      (testEmail.test($("#email").val()) === false &&
        $("#tele").val() === "") ||
      ($("#email").val() === "" && $("#tele").val() === "")
    ) {
      $("#error").text("Merci de remplir les champs soulignés\u00a0!");
    }
    if ($("#nom").val() === "" && $("#prenom").val() === "") {
      $("#error").text("Merci de remplir les champs soulignés\u00a0!");
    }
    if (
      $("#nom").val() !== "" &&
      $("#prenom").val() !== "" &&
      $("#email").val() !== "" &&
      $("#tele").val() !== "" &&
      testEmail.test($("#email").val()) !== false
    ) {
      if (letInfo === true) {
        // console.log("true!!");
        if ($("#tele").val().slice(0, 1) === "0") {
          getUserInfo(
            val1,
            $("#nom").val(),
            $("#prenom").val(),
            $("#email").val(),
            $("#tele").val()
          );
          $.ajax({
            type: "POST", //type of method
            url: "get.infos.php", //your page
            data: {
              nom: user.nom,
              prenom: user.prenom,
              tel: user.tel,
              email: user.email,
            }, // passing the values
            success: function (res) {
              // console.log(res);
              if (res == "false") {
                $("#error").text("Ce numéro de téléphone existe déjà");
              } else {
                if ($("#mr").is(":checked")) {
                  val1 = "Homme";
                  /**/
                  $(".sur1").removeClass("d-none");
                  $(".sur2").addClass("d-none");
                  $(".sur3").addClass("d-none");
                  /* */
                } else if ($("#mme").is(":checked")) {
                  val1 = "Femme";
                  /**/
                  $(".sur2").removeClass("d-none");
                  $(".sur1").addClass("d-none");
                  $(".sur3").addClass("d-none");
                  /* */
                } else {
                  val1 = "";
                  /**/
                  $(".sur3").removeClass("d-none");
                  $(".sur2").addClass("d-none");
                  $(".sur1").addClass("d-none");
                  /* */
                }
                getUserInfo(
                  val1,
                  $("#nom").val(),
                  $("#prenom").val(),
                  $("#email").val(),
                  $("#tele").val()
                );
                // console.log(val1);
                moveToQuiz();
                $("#error").text("");
                $("html").css("min-height", "auto");
                $("html").css("overflow", "hidden");
                $("body").css("min-height", "auto");
                $("body").css("overflow", "hidden");
                $("#pixel").prepend(
                  '<img src="https://orixamedia.go2cloud.org/SLZn" width="1" height="1" style="display:none;" />'
                );
              }
            },
          });
          // console.log("true");
        } else {
          // console.log("false");
          $("#error").text("Le téléphone doit commencer par 0");
        }
      } else {
        if ($("#mr").is(":checked")) {
          val1 = "Homme";
          /**/
          $(".sur1").removeClass("d-none");
          $(".sur2").addClass("d-none");
          $(".sur3").addClass("d-none");
          /* */
        } else if ($("#mme").is(":checked")) {
          val1 = "Femme";
          /**/
          $(".sur2").removeClass("d-none");
          $(".sur1").addClass("d-none");
          $(".sur3").addClass("d-none");
          /* */
        } else {
          val1 = "";
          /**/
          $(".sur3").removeClass("d-none");
          $(".sur2").addClass("d-none");
          $(".sur1").addClass("d-none");
          /* */
        }
        getUserInfo(
          val1,
          $("#nom").val(),
          $("#prenom").val(),
          $("#email").val(),
          $("#tele").val()
        );
        // console.log(val1);
        moveToQuiz();
        $("#error").text("");
        $("html").css("min-height", "auto");
        $("html").css("overflow", "hidden");
        $("body").css("min-height", "auto");
        $("body").css("overflow", "hidden");
        $("#pixel").prepend(
          '<img src="https://orixamedia.go2cloud.org/SLZn" width="1" height="1" style="display:none;" />'
        );
      }
    }

    $(".qes-progress").removeClass("d-none");
  });
  /*qes1*/
  $("#btn2").click(function () {
    if ($("#q1r1").is(":checked")) {
      getReponses(1, "reponse1");
      $("#qes1-container").find(".reponse1").removeClass("d-none");
      $("#qes1-container").find(".reponse1").find("span").text(user.prenom);
      $("#qes1-container").find(".box-qes").addClass("d-none");
      $("#qes1-container").find(".box-rep").removeClass("d-none");
      $(".qes-title1").removeClass("active");
      $(".qes-title1").addClass("active2");
      $("#shadow-mob").addClass("active");
    } else if ($("#q1r2").is(":checked")) {
      getReponses(1, "reponse2");
      $("#qes1-container").find(".reponse2").removeClass("d-none");
      $("#qes1-container").find(".box-qes").addClass("d-none");
      $("#qes1-container").find(".box-rep").removeClass("d-none");
      $(".qes-title1").removeClass("active");
      $(".qes-title1").addClass("active2");
      $("#shadow-mob").addClass("active");
    } else if ($("#q1r3").is(":checked")) {
      getReponses(1, "reponse3");
      $("#qes1-container").find(".reponse3").removeClass("d-none");
      $("#qes1-container").find(".reponse3").find("span").text(user.prenom);
      $("#qes1-container").find(".box-qes").addClass("d-none");
      $("#qes1-container").find(".box-rep").removeClass("d-none");
      $(".qes-title1").removeClass("active");
      $(".qes-title1").addClass("active2");
      $("#shadow-mob").addClass("active");
    } else {
      alert("Merci de sélectionné une réponse");
    }
  });
  /*qes1*/
  $("#btn3").click(function () {
    // $("#main").removeClass("qes1");
    $("#main").addClass("qes2");
    $(".home-container").addClass("d-none");
    $("#qes1-container").addClass("d-none");
    $("#qes2-container").removeClass("d-none");
    $(".qes-title2").addClass("active");
    $(".shadow-mob").removeClass("active");
  });
  /*qes2*/
  $("#btn4").click(function () {
    if ($("#q2r1").is(":checked")) {
      getReponses(2, "reponse1");
      $("#qes2-container").find(".reponse1").removeClass("d-none");
      $("#qes2-container").find(".reponse1").find("span").text(user.prenom);
      $("#qes2-container").find(".box-qes").addClass("d-none");
      $("#qes2-container").find(".box-rep").removeClass("d-none");
      $(".qes-title2").removeClass("active");
      $(".qes-title2").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q2r2").is(":checked")) {
      getReponses(2, "reponse2");
      $("#qes2-container").find(".reponse2").removeClass("d-none");
      $("#qes2-container").find(".reponse2").find("span").text(user.prenom);
      $("#qes2-container").find(".box-qes").addClass("d-none");
      $("#qes2-container").find(".box-rep").removeClass("d-none");
      $(".qes-title2").removeClass("active");
      $(".qes-title2").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q2r3").is(":checked")) {
      getReponses(2, "reponse3");
      $("#qes2-container").find(".reponse3").removeClass("d-none");
      $("#qes2-container").find(".box-qes").addClass("d-none");
      $("#qes2-container").find(".box-rep").removeClass("d-none");
      $(".qes-title2").removeClass("active");
      $(".qes-title2").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else {
      alert("Merci de sélectionné une réponse");
    }
  });
  /*qes2*/
  $("#btn5").click(function () {
    // $("#main").removeClass("qes1");
    $("#main").addClass("qes3");
    $("#main").removeClass("qes2");
    $(".home-container").addClass("d-none");
    $("#qes1-container").addClass("d-none");
    $("#qes2-container").addClass("d-none");
    $("#qes3-container").removeClass("d-none");
    $(".qes-title3").addClass("active");
    $(".shadow-mob").removeClass("active");
  });
  /*qes3*/
  $("#btn6").click(function () {
    if ($("#q3r1").is(":checked")) {
      getReponses(3, "reponse1");
      $("#qes3-container").find(".reponse1").removeClass("d-none");
      $("#qes3-container").find(".reponse1").find("span").text(user.prenom);
      $("#qes3-container").find(".box-qes").addClass("d-none");
      $("#qes3-container").find(".box-rep").removeClass("d-none");
      $(".qes-title3").removeClass("active");
      $(".qes-title3").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q3r2").is(":checked")) {
      getReponses(3, "reponse2");
      $("#qes3-container").find(".reponse2").removeClass("d-none");
      $("#qes3-container").find(".box-qes").addClass("d-none");
      $("#qes3-container").find(".box-rep").removeClass("d-none");
      $(".qes-title3").removeClass("active");
      $(".qes-title3").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q3r3").is(":checked")) {
      getReponses(3, "reponse3");
      $("#qes3-container").find(".reponse3").removeClass("d-none");
      $("#qes3-container").find(".box-qes").addClass("d-none");
      $("#qes3-container").find(".box-rep").removeClass("d-none");
      $(".qes-title3").removeClass("active");
      $(".qes-title3").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else {
      alert("Merci de sélectionné une réponse");
    }
  });
  /*qes3*/
  $("#btn7").click(function () {
    // $("#main").removeClass("qes1");
    $("#main").addClass("qes4");
    $("#main").removeClass("qes2");
    $("#main").removeClass("qes3");
    $(".home-container").addClass("d-none");
    $("#qes1-container").addClass("d-none");
    $("#qes2-container").addClass("d-none");
    $("#qes3-container").addClass("d-none");
    $("#qes4-container").removeClass("d-none");
    $(".qes-title4").addClass("active");
    $(".shadow-mob").removeClass("active");
  });
  /*qes4*/
  $("#btn8").click(function () {
    if ($("#q4r1").is(":checked")) {
      getReponses(4, "reponse1");
      $("#qes4-container").find(".reponse1").removeClass("d-none");
      $("#qes4-container").find(".reponse1").find("span").text(user.prenom);
      $("#qes4-container").find(".box-qes").addClass("d-none");
      $("#qes4-container").find(".box-rep").removeClass("d-none");
      $(".qes-title4").removeClass("active");
      $(".qes-title4").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q4r2").is(":checked")) {
      getReponses(4, "reponse2");
      $("#qes4-container").find(".reponse2").removeClass("d-none");
      $("#qes4-container").find(".reponse2").find("span").text(user.prenom);
      $("#qes4-container").find(".box-qes").addClass("d-none");
      $("#qes4-container").find(".box-rep").removeClass("d-none");
      $(".qes-title4").removeClass("active");
      $(".qes-title4").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q4r3").is(":checked")) {
      getReponses(4, "reponse3");
      $("#qes4-container").find(".reponse3").removeClass("d-none");
      $("#qes4-container").find(".reponse3").find(".prenom").text(user.prenom);
      $("#qes4-container").find(".box-qes").addClass("d-none");
      $("#qes4-container").find(".box-rep").removeClass("d-none");
      $(".qes-title4").removeClass("active");
      $(".qes-title4").addClass("active2");
      $(".shadow-mob").addClass("active");
      if (user.genre === "Femme") {
        $("#qes4-container").find(".reponse3").find(".genre").text("e");
      }
    } else {
      alert("Merci de sélectionné une réponse");
    }
  });
  /*qes4*/
  $("#btn9").click(function () {
    // $("#main").removeClass("qes1");
    $("#main").addClass("qes5");
    $("#main").removeClass("qes2");
    $("#main").removeClass("qes3");
    $("#main").removeClass("qes4");
    $(".home-container").addClass("d-none");
    $("#qes1-container").addClass("d-none");
    $("#qes2-container").addClass("d-none");
    $("#qes3-container").addClass("d-none");
    $("#qes4-container").addClass("d-none");
    $("#qes5-container").removeClass("d-none");
    $(".qes-title5").addClass("active");
    $(".shadow-mob").removeClass("active");
  });
  /*qes5*/
  $("#btn10").click(function () {
    if ($("#q5r1").is(":checked")) {
      getReponses(5, "reponse1");
      $("#qes5-container").find(".reponse1").removeClass("d-none");
      $("#qes5-container").find(".reponse1").find("span").text(user.prenom);
      $("#qes5-container").find(".box-qes").addClass("d-none");
      $("#qes5-container").find(".box-rep").removeClass("d-none");
      $(".qes-title5").removeClass("active");
      $(".qes-title5").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q5r2").is(":checked")) {
      getReponses(5, "reponse2");
      $("#qes5-container").find(".reponse2").removeClass("d-none");
      $("#qes5-container").find(".reponse2").find("span").text(user.prenom);
      $("#qes5-container").find(".box-qes").addClass("d-none");
      $("#qes5-container").find(".box-rep").removeClass("d-none");
      $(".qes-title5").removeClass("active");
      $(".qes-title5").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else if ($("#q5r3").is(":checked")) {
      getReponses(5, "reponse3");
      $("#qes5-container").find(".reponse3").removeClass("d-none");
      $("#qes5-container").find(".reponse3").find("span").text(user.prenom);
      $("#qes5-container").find(".box-qes").addClass("d-none");
      $("#qes5-container").find(".box-rep").removeClass("d-none");
      $(".qes-title5").removeClass("active");
      $(".qes-title5").addClass("active2");
      $(".shadow-mob").addClass("active");
    } else {
      alert("Merci de sélectionné une réponse");
    }
  });
  /*qes5*/
  $("#btn11").click(function () {
    // $("#main").removeClass("qes1");
    $("#main").removeClass("qes2");
    $("#main").removeClass("qes3");
    $("#main").removeClass("qes4");
    $("#main").removeClass("qes5");
    /**/
    $(".home-container").addClass("d-none");
    $("#qes1-container").addClass("d-none");
    $("#qes2-container").addClass("d-none");
    $("#qes3-container").addClass("d-none");
    $("#qes4-container").addClass("d-none");
    $("#qes5-container").addClass("d-none");
    $("#resultat-container").removeClass("d-none");
    $(".arrow").addClass("active");
    $(".qes-progress").removeClass("d-flex");
    $(".partage-container").addClass("partage-container-res");
    filterReponses();
    // console.log(user.genre);
  });
  /*resultat*/
  $("#btn12").click(function () {
    $("#main").removeClass("qes1");
    $("#main").removeClass("qes2");
    $("#main").removeClass("qes3");
    $("#main").removeClass("qes4");
    $("#main").removeClass("qes5");
    /**/
    $(".home-container").removeClass("d-none");
    $("#qes1-container").addClass("d-none");
    $("#qes2-container").addClass("d-none");
    $("#qes3-container").addClass("d-none");
    $("#qes4-container").addClass("d-none");
    $("#qes5-container").addClass("d-none");
    $("#resultat-container").addClass("d-none");
    /**/
    $(".qes-progress").addClass("d-none");
    $(".qes-title1").addClass("active");
    $(".qes-title1").removeClass("active2");
    $(".qes-title2").removeClass("active");
    $(".qes-title2").removeClass("active2");
    $(".qes-title3").removeClass("active");
    $(".qes-title3").removeClass("active2");
    $(".qes-title4").removeClass("active");
    $(".qes-title4").removeClass("active2");
    $(".qes-title5").removeClass("active");
    $(".qes-title5").removeClass("active2");
    /**/
    $("#qes1-container").find(".box-qes").removeClass("d-none");
    $("#qes1-container").find(".box-rep").addClass("d-none");
    $("#qes2-container").find(".box-qes").removeClass("d-none");
    $("#qes2-container").find(".box-rep").addClass("d-none");
    $("#qes3-container").find(".box-qes").removeClass("d-none");
    $("#qes3-container").find(".box-rep").addClass("d-none");
    $("#qes4-container").find(".box-qes").removeClass("d-none");
    $("#qes4-container").find(".box-rep").addClass("d-none");
    $("#qes5-container").find(".box-qes").removeClass("d-none");
    $("#qes5-container").find(".box-rep").addClass("d-none");
    /**/
    $("#main").removeClass("resultat-box1");
    $("#main").removeClass("resultat-box2");
    $("#main").removeClass("resultat-box3");
    $("#main").removeClass("resultat-box4");
    $("#main").removeClass("resultat-box5");
    $("#main").removeClass("resultat-box6");
    /**/
    $(".reponse1").addClass("d-none");
    $(".reponse2").addClass("d-none");
    $(".reponse3").addClass("d-none");

    $(".arrow").removeClass("active");
    $(".shadow-mob").removeClass("active");
    $(".partage-container").removeClass("partage-container-res");
    a = 0;
    b = 0;
    c = 0;
    $("#nom").val("");
    $("#prenom").val("");
    $("#email").val("");
    $("#tele").val("");
    $("#mr").prop("checked", false);
    $("#mme").prop("checked", false);
    /**/
    $("#q1r1").prop("checked", false);
    $("#q1r2").prop("checked", false);
    $("#q1r3").prop("checked", false);
    /**/
    $("#q2r1").prop("checked", false);
    $("#q2r2").prop("checked", false);
    $("#q2r3").prop("checked", false);
    /**/
    $("#q3r1").prop("checked", false);
    $("#q3r2").prop("checked", false);
    $("#q3r3").prop("checked", false);
    /**/
    $("#q4r1").prop("checked", false);
    $("#q4r2").prop("checked", false);
    $("#q4r3").prop("checked", false);
    /**/
    $("#q5r1").prop("checked", false);
    $("#q5r2").prop("checked", false);
    $("#q5r3").prop("checked", false);
  });
  /**/
  $("#infos").click(function () {
    letInfo = false;
    $("#text-confirmation").fadeIn(1000);
    setTimeout(function () {
      $("#text-confirmation").fadeOut(1000);
    }, 4000);
    // console.log(letInfo);
  });
  function mEgal() {
    $("#modalmegal").css("display", "flex");
  }
  $(".m-egal").click(function () {
    setTimeout(mEgal, 500);
  });
  function madiaS() {
    $(".fb-partage").addClass("s-media");
    $(".fb-partage").addClass("s-media");
    $(".fb-partage").addClass("s-media");
  }
  $(".fb-partage").click(function () {
    setTimeout(madiaS, 300);
  });
  $(".twt-partage").click(function () {
    setTimeout(madiaS, 300);
  });
  $(".email-partage").click(function () {
    setTimeout(madiaS, 300);
  });
  //called when key is pressed in textbox
  $("#tele").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (
      e.which != 43 &&
      e.which != 8 &&
      e.which != 0 &&
      (e.which < 48 || e.which > 57)
    ) {
      //display error message
      return false;
    }
  });
});
