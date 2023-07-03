
const JumpsData = [
    {
        label: 'Amazon India',
        key: 'amazonin',
        url: 'http://amazon.in/s?k={}'
    },
    {
        label: 'Amazon',
        key: 'amazon',
        url: 'http://amazon.com/s?k={}'
    },
    {
        label: 'Amazon Iceland',
        key: 'amazonic',
        url: 'http://amazon.ic/s?k={}'
    },
    {
        label: 'Amazon Germany',
        key: 'amazonde',
        url: 'http://amazon.de/s?k={}'
    },
    {
        label: 'Amazon Italy',
        key: 'amazonit',
        url: 'http://amazon.it/s?k={}'
    },
    {
        label: 'Amazon Uk',
        key: 'amazonuk',
        url: 'http://amazon.co.uk/s?k={}'
    },
    {
        label: 'Amazon France',
        key: 'amazonfr',
        url: 'http://amazon.fr/s?k={}'
    },
    {
        label: 'Amazon Espanol',
        key: 'amazones',
        url: 'http://amazon.es/s?k={}'
    },
]

export async function searchJumpsData(query) {
    let q = query.split(" ")[0];
    if(q[0] === '!')
    {
        q = q.replace("!", "");
    }

    let results = [];

    let data = await fetch('/bang.js');
    data = await data.json();

    let i = 0;
    while (i < data.length) {
        // if(data[i].s.toLowerCase().startsWith(q.toLowerCase())) {
        //     results.push([i, ((data[i].s.length) - q.length)])
        // }
        if(data[i].t.toLowerCase().startsWith(q.toLowerCase())) {
            results.push([i, ((data[i].t.length) - q.length)])
        }
        i++;
    }

    results.sort((a, b) => a[1] - b[1]);

    let new_results = []

    results.map((r, x) => {
        if(x < 15) {
            new_results.push(data[r[0]]);
        }
    });

    return new_results;
}

export default JumpsData;