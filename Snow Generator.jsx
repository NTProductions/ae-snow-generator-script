function generateSnow(numParticles, flakeVariation, speedVariation, depth) {
        var snowComp = app.project.items.addComp("Snow", 1920, 1080, 1, 10, 30);
        var flakes = [];
        var scaleAdd, speedAdd, zDepth;
        var camera = snowComp.layers.addCamera("Camera", [snowComp.width*.5, snowComp.height*.5]);
        for(var i = 0; i < numParticles; i++) {
            scaleAdd = Math.floor(Math.random() * flakeVariation) + 0;
            speedAdd = Math.floor(Math.random() * speedVariation) + 0;
            zDepth = Math.floor(Math.random() * depth) + 0;
            flakes.push(snowComp.layers.addSolid([1, 1, 1], "Flake_"+(i+1), snowComp.height, snowComp.height, 1, snowComp.duration));
            flakes[i].threeDLayer = true;
            flakes[i].property("ADBE Transform Group").property("ADBE Scale").setValue([.5+scaleAdd*.01, .5+scaleAdd*.01]);
            flakes[i].property("ADBE Transform Group").property("ADBE Position").setValuesAtTimes([0, Math.floor(Math.random() * (9+speedAdd)) + 9], [[Math.floor(Math.random() * 1920) + 0, -1*(Math.floor(Math.random() * 1300) + 0), zDepth], [Math.floor(Math.random() * 1500) + 0, Math.floor(Math.random() * 1700) + 0, zDepth]]);
            }
        snowComp.openInViewer();
    }

app.beginUndoGroup("Generate Snow");
// recommended ranges
// numParticles: 100-1 000
// flakeVariation: 0-20
// speedVariation: 0-25
// depth: 0-10 000
generateSnow(250, 20, 25, 2500);
app.endUndoGroup();