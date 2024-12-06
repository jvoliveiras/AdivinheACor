let allColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", 
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", 
    "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", 
    "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", 
    "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", 
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", 
    "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", 
    "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", 
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", 
    "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", 
    "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", 
    "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", 
    "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", 
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", 
    "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", 
    "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", 
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", 
    "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", 
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", 
    "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", 
    "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
  ];

  let chosenColors = [];
  let hiddenColor = "";

  function initializeGame() {
    chosenColors = allColors.sort(() => 0.5 - Math.random()).slice(0, 10);
    hiddenColor = chosenColors[Math.floor(Math.random() * chosenColors.length)];

    console.log("Available colors:", chosenColors);
    console.log("Secret color:", hiddenColor);

    const colorOptions = document.getElementById("colorOptions");
    colorOptions.innerHTML = "";

    chosenColors.forEach(color => {
      const li = document.createElement("li");
      li.className = "color-item";
      li.textContent = color;
      li.onclick = () => checkGuess(color);
      colorOptions.appendChild(li);
    });

    document.getElementById("response").textContent = "";
    document.body.style.backgroundColor = "#f0f0f0";
  }

  function checkGuess(selectedColor) {
    const response = document.getElementById("response");

    if (selectedColor === hiddenColor) {
      document.body.style.backgroundColor = hiddenColor;
      response.textContent = `Parabéns! você acertou!! A cor secreta era ${hiddenColor}. Em 5s o jogo reiniciará automaticamente!`;
      setTimeout(() => {
          initializeGame()
      }, 5000)
    } else {
      const isBefore = selectedColor.toLowerCase() < hiddenColor.toLowerCase();
      response.textContent = `Ops, voce errou! A inicial da cor secreta é ${isBefore ? "depois" : "antes"} de ${selectedColor} na ordem alfabética.`;
    }
  }

  initializeGame();