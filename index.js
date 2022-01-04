const text = [ 'If you’re here, you’re probably pretty well read. Congratulations you! Still, it’s one thing to read a great book, but quite another to retain it. Especially considering most of us read a number of the classics in our teenage years, when we were only half paying attention anyway. And it’s one thing to know that Shakespeare wrote something (as the sages say: when in doubt, it’s from Shakespeare), but quite another to remember the play it came from.',
'So to test our collective memories (and libraries), and to break up the pandemic tedium with a little bit of competition, and also because it’s fun, I’ve picked out 100 of the most referenced, quoted, reused, and generally well-known passages of literature, from single memorable lines of dialogue to longer sections of prose or verse, and turned them into a quiz.',
'To guide my selections, I looked at what seemed like an endless stream of quote pages and lists, including Lit Hub’s own list of the most iconic poems in the English language, keeping track of the popularity of various quotes. (I also just used my judgement; I’ve been doing this for a while.) I limited myself to one passage per distinct work, though some authors are quoted more than once.',
'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
'Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference.It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
'Because I could not stop for Death – He kindly stopped for me – The Carriage held but just Ourselves – And Immortality.Don’t ever tell anybody anything. If you do, you start missing everybody.Happy families are all alike; every unhappy family is unhappy in its own way.',
'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.',
'This is the way the world ends This is the way the world ends This is the way the world ends Not with a bang but a whimperthis is how to make a good medicine for a cold; this is how to make a good medicine to throw away a child before it even becomes a child; this is how to catch a fish; this is how to throw back a fish you don’t like, and that way something bad won’t fall on you; this is how to bully a man; this is how a man bullies you; this is how to love a man; and if this doesn’t work there are other ways, and if they don’t work don’t feel too bad about giving up;',
'this is how to spit up in the air if you feel like it, and this is how to move quick so that it doesn’t fall on you; this is how to make ends meet; always squeeze bread to make sure it’s fresh; but what if the baker won’t let me feel the bread?; you mean to say that after all you are really going to be the kind of woman who the baker won’t let near the bread?',
'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.',
'All the world’s a stage, And all the men and women merely players: They have their exits and their entrances; And one man in his time plays many parts.Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage, against the dying of the light.',
]

const result = document.querySelector('.result');
const amount = document.getElementById('loreal');
const form = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let number = parseInt(amount.value);
    let paragragh = text.slice(0,number);

    if(isNaN(number) || number<= 0 || number>12){
        let randomNum = Math.floor(Math.random()*text.length);
        result.innerHTML = `<p>${text[randomNum]}</p>`
    }
    
    else{
    
        result.innerHTML = paragragh.map(function(item){
            return `<p>${item}</p>`
        }).join(' ');
    }
    

})