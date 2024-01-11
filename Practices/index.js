const btn = document.querySelector('#jokebtn')
btn.addEventListener('click',clicke)
function clicke(){
    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);

        const item = arr[randomIndex];
        
        return item;
}
    
    const array =  ["What did the grape say when it was stepped on? Nothing, it just let out a little wine","What’s more amazing than a talking dog? A spelling bee.","Once you've seen one shopping center, you've seen the mall.","Time flies like an arrow. Fruit flies like a banana.","Why can't a bicycle stand on its own? It's two-tired.","To the guy who invented zero: Thanks for nothing!","I'm thinking of reasons to go to Switzerland. The flag is a big plus.","I was up all night wondering where the sun went, but then it dawned on me.","When my son told me to stop impersonating a flamingo, I had to put my foot down.","Why is it always hot in the corner of a room? Because a corner is 90 degrees.","When my son told me to stop impersonating a flamingo, I had to put my foot down.","My dolphin puns are terrible on porpoise.","A plateau is the highest form of flattery.","How do you find Will Smith in the snow? Look for fresh prints.","Why can't a bicycle stand on its own? It's two-tired.","Orion’s Belt is a huge waist of space.","I'm reading a book about anti-gravity. I can't put it down.","Where do generals keep their armies? In their sleevies!","Once you've seen one shopping center, you've seen the mall.","Orion’s Belt is a huge waist of space.","Why is it always hot in the corner of a room? Because a corner is 90 degrees.","I didn't like my beard at first. Then it grew on me.","A burger walks into a bar. The bartender says 'Sorry, we don't serve food here'","I was up all night wondering where the sun went, but then it dawned on me.","What’s more amazing than a talking dog? A spelling bee.","I'm thinking of reasons to go to Switzerland. The flag is a big plus.","What's brown and sticky? A stick.","Orion’s Belt is a huge waist of space.","Time flies like an arrow. Fruit flies like a banana.","How do you find Will Smith in the snow? Look for fresh prints","Orion’s Belt is a huge waist of space.","I was up all night wondering where the sun went, but then it dawned on me.","I didn't like my beard at first. Then it grew on me.","How do you find Will Smith in the snow? Look for fresh prints.","When my son told me to stop impersonating a flamingo, I had to put my foot down.","I'm reading a book about anti-gravity. I can't put it down.","What did the grape say when it was stepped on? Nothing, it just let out a little wine.","Found out I was color blind the other day. That one came right out of the orange."]
    
    let  result = getRandomItem(array);
    const show = document.getElementById('joke').innerHTML = result
}
