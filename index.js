let x = 0;

function onInputChange(value) {
    x = value;
}


function interpolate() {
    const array = [
        {
            kk: 0,
            d: -2.5,
        },
        {
            kk: 10,
            d: -0.5,
        },
        {
            kk: 20,
            d: 1.6,
        },
        {
            kk: 30,
            d: 4.4,
        },
        {
            kk: 40,
            d: 7.6,
        },
        {
            kk: 50,
            d: 11.1,
        },
        {
            kk: 60,
            d: 14,
        },
        {
            kk: 70,
            d: 16.5,
        },
        {
            kk: 80,
            d: 18.7,
        },
        {
            kk: 90,
            d: 20.1,
        },
        {
            kk: 100,
            d: 20.8,
        },
        {
            kk: 110,
            d: 19.4,
        },
        {
            kk: 120,
            d: 16.7,
        },
        {
            kk: 130,
            d: 13.4,
        },
        {
            kk: 140,
            d: 9.8,
        },
        {
            kk: 150,
            d: 6.9,
        },
        {
            kk: 160,
            d: 4.6,
        },
        {
            kk: 170,
            d: 2.5,
        },
        {
            kk: 180,
            d: 1.1,
        },
        {
            kk: 190,
            d: 0.9,
        },
        {
            kk: 200,
            d: -1.2,
        },
        {
            kk: 210,
            d: -3.3,
        },
        {
            kk: 220,
            d: -6.5,
        },
        {
            kk: 230,
            d: -10.3,
        },
        {
            kk: 240,
            d: -13.2,
        },
        {
            kk: 250,
            d: -15.7,
        },
        {
            kk: 260,
            d: -17.9,
        },
        {
            kk: 270,
            d: -19.2,
        },
        {
            kk: 280,
            d: -18.1,
        },
        {
            kk: 290,
            d: -16.2,
        },
        {
            kk: 300,
            d: -13.9,
        },
        {
            kk: 310,
            d: -10.6,
        },
        {
            kk: 320,
            d: -8.3,
        },
        {
            kk: 330,
            d: -6.2,
        },
        {
            kk: 340,
            d: -4.4,
        },
        {
            kk: 350,
            d: -2.9,
        },
        {
            kk: 360,
            d: -2.5,
        },
    ];

    let min = 0;
    let max = 10;

    for (let i = 0; i < array.length; i++) {
        if (array[i].kk > x) {
            continue;
        }
        min = array[i];

        if (i + 1 > array.length - 1) {
            min = array[array.length - 2];
            max = array[i];
        } else {
            max = array[i + 1];
        }
    }

    const x1 = min.kk;
    const x2 = max.kk;
    const fx1 = min.d;
    const fx2 = max.d;

    let result = fx1 + (x - x1) * ((fx2 - fx1) / (x2 - x1));
    const splited = result.toString().split('.');
     if (splited.length > 1 && splited[1].length >2)  {
         result = result.toFixed(2);
     }

    document.getElementById('result').innerHTML = result;

}

