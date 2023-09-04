var darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log("Darth Vader's allegiance:", darthVader.allegiance);
console.log("Darth Vader's weapon:", darthVader.weapon);
console.log("If Darth Vader is a Sith:", darthVader.sith );
console.log("The value of Jedi from Darth Vader:", darthVader.jedi);
console.log("Number of properties Darth Vader has:", Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia'];

console.log("Darth Vader's children:", darthVader.children);
console.log("First child's name:", darthVader.childNames[0]);

for (var key in darthVader) {
    if (darthVader.hasOwnProperty(key)) {
    console.log("Key:", key, "Value", darthVader[key]);
}
}

darthVader.allegiance = "The light side";
console.log("\nDarth Vader after changing allegiance:", darthVader);

delete darthVader.children;
console.log("\nDarth Vader after deleting children:", darthVader);

