let capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const blocks = [
    'aluminum', 'apatite', 'brass',
    'bronze', 'cinnabar', 'constantan',
    'copper', 'electrum', 'elementium', 'enderium',
    'gold', 'infinitium', 'invar',
    'iron', 'lead', 'lumium',
    'manasteel', 'nickel', 'niter',
    'osmium', 'ruby', 'sapphire',
    'signalum', 'silver', 'steel',
    'sulfur', 'terrasteel', 'tin',
    'uranium', 'zinc'
];
StartupEvents.registry("block", (event) => {
    event.create("basalt_gravel")
        .displayName("Basalt Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/basalt_gravel');
    event.create("limestone_gravel")
        .displayName("Limestone Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/limestone_gravel');
    event.create("tuff_gravel")
        .displayName("Tuff Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/tuff_gravel');
    blocks.forEach(block => {
        event.create(`${block}_block`)
            .displayName(`${capitalize(block)} Block`)
            .soundType('metal')
            .hardness(5.0)
            .resistance(6.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool');
    });

    event.create('coal_coke_block')
        .displayName('Block of Coal Coke')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe');

    event.create('dormant_trial_spawner')
        .displayName('Dormant Trial Spawner')
        .mapColor('stone')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .opaque(true)
        .fullBlock(true)
        .texture('up', 'kubejs:block/dormant_trial_spawner_top')
        .texture('down', 'kubejs:block/dormant_trial_spawner_botton')
        .texture('north', 'kubejs:block/dormant_trial_spawner_side')
        .texture('south', 'kubejs:block/dormant_trial_spawner_side')
        .texture('east', 'kubejs:block/dormant_trial_spawner_side')
        .texture('west', 'kubejs:block/dormant_trial_spawner_side');
});