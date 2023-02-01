var drowAbilities = [{ability:"<span class='bold'>Detect Secret Doors:</span>", description:"• Drow have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance."},
{ability:"<span class='bold'>Immunity to Ghoul Paralysis:</span>", description:"• Drow are completely unaffected by the paralysis ghouls can inflict."},
{ability:"<span class='bold'>Infravision:</span>", description:"• Drow have infravision to 90'."},
{ability:"<span class='bold'>Light Sensitivity:</span>", description:"• When in bright light (daylight, continual light), drow suffer a –2 penalty to attack rolls and a –1 penalty to Armour Class."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Drow have a 2-in-6 chance of hearing noises."}];

var duergarAbilities = [{ability:"<span class='bold'>Detect Construction Tricks:</span>", description:"• As expert miners, duergars have a 2-in-6 chance of being able to detect new construction, sliding walls, or sloping passages when searching."},
{ability:"<span class='bold'>Detect Room Traps:</span>", description:"• Due to their expertise with construction, duergars have a 2-in-6 chance of detecting non-magical room traps when searching."},
{ability:"<span class='bold'>Infravision:</span>", description:"• Duergars have infravision to 90'."},
{ability:"<span class='bold'>Light Sensitivity:</span>", description:"• When in bright light (daylight, continual light), duergars suffer a –2 penalty to attack rolls and a –1 penalty to Armour Class."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Duergars have a 2-in-6 chance of hearing noises."},
{ability:"<span class='bold'>Resilience:</span>", description:"• Duergars’ natural constitution and resistance to magic grants them a bonus to saving throws versus paralysis, poison, spells, and magic wands, rods, and staves. This bonus depends on a duergar’s CON score, as follows:", amounts:"• 6 or lower: No bonus, 7-10: +2, 11-14: +3, 15-17: +4, 18: +5"},
{ability:"<span class='bold'>Steath:</span>", description:"• Underground, duergars have a 3-in-6 chance of moving silently."}];

var dwarfAbilities = [{ability:"<span class='bold'>Detect Construction Tricks:</span>", description:"• As expert miners, dwarves have a 2-in-6 chance of being able to detect new construction, sliding walls, or sloping passages when searching."},
{ability:"<span class='bold'>Detect Room Traps:</span>", description:"• Due to their expertise with construction, dwarves have a 2-in-6 chance of detecting non-magical room traps when searching."},
{ability:"<span class='bold'>Infravision:</span>", description:"• Dwarves have infravision to 60'."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Dwarves have a 2-in-6 chance of hearing noises."},
{ability:"<span class='bold'>Resilience:</span>", description:"• Dwarves' natural constitution and resistance to magic grants them a bonus to saving throws versus poison, spells, and magic wands, rods, and staves. This bonus depends on a dwarf's CON score, as follows:", amounts:"• 6 or lower: No bonus, 7-10: +2, 11-14: +3, 15-17: +4, 18: +5"}];

var elfAbilities = [{ability:"<span class='bold'>Detect Secret Doors:</span>", description:"• Elves have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance."},
{ability:"<span class='bold'>Immunity to Ghoul Paralysis:</span>", description:"• Elves are completely unaffected by the paralysis that ghouls can inflict."},
{ability:"<span class='bold'>Infravision:</span>", description:"• Elves have infravision to 60’."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Elves have a 2-in-6 chance of hearing noises."}];

var gnomeAbilities = [{ability:"<span class='bold'>Defensive Bonus:</span>", description:"• Due to their small size, gnomes gain a +2 bonus to Armour Class when attacked by large opponents (greater than human-sized)."},
{ability:"<span class='bold'>Detect Construction Tricks:</span>", description:"• As expert tunnellers, gnomes have a 2-in-6 chance of being able to detect new construction, sliding walls, or sloping passages when searching."},
{ability:"<span class='bold'>Infravision:</span>", description:"• Gnomes have infravision to 90’."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Gnomes have a 2-in-6 chance of hearing noises."},
{ability:"<span class='bold'>Magic Resistance:</span>", description:"• Gnomes are naturally resistant to magic, gaining a bonus to saving throws versus spells and magic wands, rods, and staves. This bonus depends on a gnome’s CON score, as follows:", amounts:"• 6 or lower: No bonus, 7-10: +2, 11-14: +3, 15-17: +4, 18: +5"},
{ability:"<span class='bold'>Speak with Burrowing Mammals:</span>", description:"• Gnomes often keep burrowing mammals such as badgers and moles as pets. They know the secret language of such creatures."}];

var halfElfAbilities = [{ability:"<span class='bold'>Detect Secret Doors:</span>", description:"• Half-elves have keen eyes that allow them, when actively searching, to detect hidden and secret doors with a 2-in-6 chance"},
{ability:"<span class='bold'>Infravision:</span>", description:"• Half-elves have infravision to 60’."}];

var halflingAbilities = [{ability:"<span class='bold'>Defensive Bonus:</span>", description:"• Due to their small size, halflings gain a +2 bonus to Armour Class when attacked by large opponents (greater than human-sized)."},
{ability:"<span class='bold'>Initiative Bonus:</span>", description:"• If using the optional rule for individual initiative, halflings get a bonus of +1 to initiative rolls."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Halflings have a 2-in-6 chance of hearing noises."},
{ability:"<span class='bold'>Missile Attack Bonus:</span>", description:"• Halflings’ keen coordination grants them a +1 bonus to attack rolls with all missile weapons."},
{ability:"<span class='bold'>Resilience:</span>", description:"• Halflings’ natural constitution and resistance to magic grants them a bonus to saving throws versus poison, spells, and magic wands, rods, and staves. This bonus depends on a halfling’s CON score, as follows:", amounts:"• 6 or lower: No bonus, 7-10: +2, 11-14: +3, 15-17: +4, 18: +5"}];

var halfOrcAbilities = [{ability:"<span class='bold'>Infravision:</span>", description:"• Half-orcs have infravision to 60’."}];

var humanAbilities = [{ability:"<span class='bold'>Decisivness:</span>", description:"• When an initiative roll is tied, humans act first, as if they had won initiative. If using the individual initiative rule, humans get a bonus of +1 to initiative."},
{ability:"<span class='bold'>Leadership:</span>", description:"• All of a human’s retainers and hirelings gain a +1 bonus to loyalty and morale."}];

var svirfneblinAbilties = [{ability:"<span class='bold'>Blend into Stone:</span>", description:"• Svirfneblins have the uncanny ability to go unnoticed when in an environment of natural or carved stone so long as they remain silent and motionless. The chance of success is 4-in-6 in gloomy conditions or 2-in-6 in well-lit conditions."},
{ability:"<span class='bold'>Defensive Bonus:</span>", description:"• Due to their small size, svirfneblins gain a +2 AC bonus when attacked by large opponents (greater than human-sized)."},
{ability:"<span class='bold'>Detect Construction Tricks:</span>", description:"• Svirfneblins have a 2-in-6 chance of detecting new construction, sliding walls, or sloping passages when searching."},
{ability:"<span class='bold'>Infravision:</span>", description:"• Svirfneblins have infravision to 90’."},
{ability:"<span class='bold'>Light Sensitivity:</span>", description:"• When in bright light (daylight, continual light), svirfneblins suffer –2 to attack rolls and a –1 penalty to Armour Class."},
{ability:"<span class='bold'>Listening at Doors:</span>", description:"• Svirfneblins have a 2-in-6 chance of hearing noises."},
{ability:"<span class='bold'>Illusion Resistance:</span>", description:"• Svirfneblins gain a +2 bonus to all saving throws against illusions."},
{ability:"<span class='bold'>Speak With Earth Elementals:</span>", description:"• Svirfneblins can speak with natives of the plane of elemental earth."}];