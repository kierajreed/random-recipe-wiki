function renderRecipeList(recipes) {
    return `<div>
        <h1>Random Recipe Wiki</h1>
        ${recipes.map(e => `<h3><a href="/recipe?r=${e[0]}">${e[1]}</a></h3>`).join('\n')}
    </div>`;
}

document.addEventListener('DOMContentLoaded', async e => {
    let recipes = await fetch('recipes', {method: 'POST'});
    document.getElementById('list-container').innerHTML = renderRecipeList(await recipes.json());
});