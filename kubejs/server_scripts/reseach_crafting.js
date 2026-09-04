//script for adding crafts to researches

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('researchd:research_pack[researchd:research_pack="kubejs:basic_pack"]'),
        [
            'create:cogwheel',
            'create:andesite_casing'
        ]
    )
})