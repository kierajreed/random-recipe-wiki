const getParam = p => new URLSearchParams(window.location.search).get(p);

function renderRecipe(recipe) {
    return `<div>
        <div>
            <h1>${recipe.name}</h1>
            <h4>By ${recipe.author}</h4>
        </div>
        <div>${ recipe.ingredients.map(e =>
            `${e.title!=='' ? `<h2>${e.title}</h2>` : ''}
            <ul>
                ${e.items.map(q => `<li>${q}</li>`).join('\n')}
            </ul>`
        )}</div>
        <div>
            <ol>${
                recipe.preparation.map(q => `<li>${q}</li>`).join('\n')
            }</ol>
        </div>
        <div>${
            recipe.tags.map(q => `<span>${q}</span>`).join('\n')
        }</div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', async e => {
    let recipeRes = await fetch('recipes/'+getParam('r')+'.json');
    document.getElementById('outer-recipe').innerHTML = renderRecipe(await recipeRes.json());
});