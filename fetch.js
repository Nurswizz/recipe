require('dotenv').config();

async function getData(query)
{
    const app_key = process.env.APP_KEY;
    const app_id = process.env.APP_ID; 
    const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`;

    try {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const recipes = json.hits.map(hit => ({
            label: hit.recipe.label,
            img: hit.recipe.image,
            url: hit.recipe.label.replaceAll(' ', '-'),
            ing: hit.recipe.ingredients
        }));
        return recipes;
    }
    catch{
        console.log(error.message);
    }
}

module.exports = getData;