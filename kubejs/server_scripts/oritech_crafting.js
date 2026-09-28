ServerEvents.recipes(event => {
    event.remove({ output: 'oritech:foundry_block' }),
    event.remove({ output: 'oritech:steel_ingot' }),
    // sometimes oritech will be weird about removing recipes
    // you'll need to find the file location and make your own id
    // example: https://github.com/Rearth/Oritech/blob/1.21/neoforge/src/main/generated/data/oritech/recipe/foundry/alloy/steel.json =>
    // event.remove({id: "oritech:foundry/alloy/steel"})

    
    event.recipes.minecraft.crafting_shaped('oritech:foundry_block', 
    [
    'AAA',
    'ABA',
    'CDC'
    ],
{
 A: "minecraft:copper_block",
 B: "oritech:motor",
 C: "oritech:steel_block",
 D: "create:basin"
})

})