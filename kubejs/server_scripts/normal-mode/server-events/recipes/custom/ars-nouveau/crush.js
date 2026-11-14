ServerEvents.recipes(event => {
    const recipes = [
        { input: 'minecraft:andesite', output: 'infinite_horizons_tweaks:andesite_gravel' },
        { input: 'minecraft:diorite', output: 'infinite_horizons_tweaks:diorite_gravel' },
        { input: 'minecraft:granite', output: 'infinite_horizons_tweaks:granite_gravel' },
        { input: 'minecraft:gravel', output: 'minecraft:sand' },
        { input: 'minecraft:tuff', output: 'infinite_horizons_tweaks:tuff_gravel' },
        { input: 'minecraft:sand', output: 'createsifter:dust' },
        { input: 'minecraft:cobbled_deepslate', output: 'infinite_horizons_tweaks:deepslate_gravel' },
        { input: 'minecraft:basalt', output: 'infinite_horizons_tweaks:basalt_gravel' },
        { input: 'create:limestone', output: 'infinite_horizons_tweaks:limestone_gravel' },
        { input: 'minecraft:ender_pearl', output: 'infinite_resources:ender_pearl_dust' }
    ];

    recipes.forEach(recipe => {
        let recipeId = `ars_nouveau:crushing/${recipe.input.split(':')[1]}`

        event.custom({
            type: "ars_nouveau:crush",
            input: {
                item: recipe.input
            },
            output: [
                {
                    item: recipe.output,
                    count: 1,
                    chance: 1.0
                }
            ]
        }).id(recipeId);
    });
});