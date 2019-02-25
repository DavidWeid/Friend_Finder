var friendsData = [
    {
        name: "Troye Sivan",
        photo: "https://www.instagram.com/p/BnPybyRBbiP/?utm_source=ig_web_button_share_sheet",
        scores: [
            1,
            3,
            2,
            5,
            5,
            5,
            4,
            3,
            5,
            3
        ]
    },
    {
        name: "Tom Holland",
        photo: "https://www.instagram.com/p/BoYN6ODFUu1/?utm_source=ig_web_button_share_sheet",
        scores: [
            2,
            3,
            5,
            5,
            3,
            4,
            4,
            2,
            5,
            3
        ]
    },
    {
        name: "Jacob Bixenman",
        photo: "https://www.instagram.com/p/Bngpg5Ah2IH/?utm_source=ig_web_button_share_sheet",
        scores: [
            3,
            2,
            1,
            3,
            4,
            4,
            5,
            4,
            4,
            4
        ]
    },
    {
        name: "Brandon Flynn",
        photo: "https://www.instagram.com/p/BnkDtWJABRS/?utm_source=ig_web_button_share_sheet",
        scores: [
            4,
            3,
            2,
            4,
            5,
            3,
            4,
            4,
            4,
            4
        ]
    }
];

var newFriend = {
    name: "Gehe",
    photo: "https://www.instagram.com/p/BrXyaLlFYfr/?utm_source=ig_web_button_share_sheet",
    scores: [
        4,
        3,
        2,
        4,
        5,
        3,
        4,
        3,
        5,
        5
    ]
};

var comparisonArray = [];

for (var i = 0; i < friendsData.length; i++) {

    console.log(friendsData[i].scores);

    var difArray = [];

    for (var j = 0; j < newFriend.scores.length; j++) {

        var dif = newFriend.scores[j] - friendsData[i].scores[j];
        difArray.push(Math.abs(dif));

    }

    console.log(difArray);

    var sum = difArray.reduce(add);

    function add(accumulator, a) {
        return accumulator + a;
    }

    console.log(sum);

    comparisonArray.push(sum);

};

console.log(comparisonArray);

var min = Math.min.apply(Math, comparisonArray);

console.log(min);

var minIndex = comparisonArray.indexOf(min);

console.log(minIndex);

var bestMatch = friendsData[minIndex];

console.log(bestMatch);