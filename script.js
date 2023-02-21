var currentScreen = 0;
var points = 0;
var addPoints = function () {
  points += parseInt($("input[name=option]:checked").val());
}
var set = {
  header: function(text) {
    $("h1").html(text);
  },
  option0: function(url) {
    $("input#option0").css("background-image", "url(" + url + ")");
  },
  option1: function(url) {
    $("input#option1").css("background-image", "url(" + url + ")");
  },
  option2: function(url) {
    $("input#option2").css("background-image", "url(" + url + ")");
  },
  button: function(text) {
    $("button").html(text);
  },
  result: function (url) {
    $("#result").attr("src", url);
  }
}
var hide = {
  form: function () {
    $("form").addClass("hidden");
  },
  result: function () {
    $("#result").css("display", "none");
  }
}

var show = {
  form: function () {
    $("form").removeClass("hidden");
  },
  result: function () {
    $("#result").css("display", "block");
  }
}

$(document).ready(function(){
  $("button").click(function(){
    console.log("currentScreen = " + currentScreen);
    if (currentScreen == 0) {
      // on start screen, moving to Q1
      hide.result();
      show.form();
      set.header("pick a color");
    set.option0("https://upload.wikimedia.org/wikipedia/commons/b/b3/Solid_gray.png");
      set.option1("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWGPg83W9Hr-dN8bCdKYISkFP_PxQli3I8CdxeWjsLRVmW-Ie");
      set.option2("http://www.pitshanger-ltd.co.uk/images/colours/635-Yellow%20MR.JPG");
      set.button("next");
    } else if (currentScreen == 1) {
      //showing Q1, moving onto Q2
      addPoints();
      set.header("pick a fruit");
      set.option0("http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_kiwi.jpg");
      set.option1("https://healthjade.com/wp-content/uploads/2017/10/orange-fruit.jpg");
      set.option2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0AJ1YEhxz5D4jmanfZFF5GI3Z4OlXxHejjEO2wUhwq_QWhLB6g");
      set.button("next");
    } else if (currentScreen == 2) {
      //showing Q2, moving onto Q3
      addPoints();
      set.header("pick an animal");
      set.option0("https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00077427_yjtgnj.jpg");
      set.option1("https://cdn.britannica.com/98/152298-004-FE1345ED.jpg");
      set.option2("https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450");
      set.button("result");
    } else if (currentScreen == 3) {
      //showing Q3, moving onto result
      addPoints();
      hide.form();
      set.header("you are")
     show.result(); 
      if (points == 0) {
        set.result("https://i5.walmartimages.com/asr/3d09dd36-7035-4b9f-b965-d4a9a36e5c7b_1.bc4a5060a274c0c2db4970d9075daa90.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF")
      } else if (points == 1) {
        set.result("http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/fire.png");
      } else if (points == 2) {
        set.result("https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_large.png?v=1480481054");
      } else if (points == 3) {
        set.result("https://cdn.shopify.com/s/files/1/1061/1924/products/Sparkling_Pink_Heart_Emoji_large.png?v=1480481032");
      } else if (points == 4) {
        set.result("https://giganticsequins.files.wordpress.com/2015/11/emoji-happy.jpg");
      } else {
        set.result("http://cdn.shopify.com/s/files/1/1061/1924/products/Bear_emoji_icon_png_grande.png?v=1480481027");
      }
      console.log("points = " +points);
      set.button("restart");
    } else {
      //showing result moving onto restart
      set.header("which emoji are you?")
      set.result("https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060");
      set.button("start");
    }
    currentScreen = (currentScreen + 1) % 5
  });
});