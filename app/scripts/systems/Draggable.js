DraggableSystem = pc.systems.Input.extend('DraggableSystem',
  {
    
  },
  {
    init: function() {
      this._super(["DraggableComponent"]);
    },

    onAction: function(actionName, event, pos, uiTarget) {

      // Shortcuts
      entity = uiTarget.getEntity();
      status = entity.getComponent("input").status;

      // If started dragging from stillness
      if( actionName === "drag:start" && status === "still"){
        // Set the status to start
        entity.getComponent("input").status = "start";
        // Save the position at which it started
        entity.getComponent("input").started_at = pos;
        // Calculate the offset
        entity.getComponent("input").offset = pc.Point.create(
            // This is the position at which started minus the coordinates
            entity.getComponent("input").started_at.x - entity.getComponent("spatial").pos.x,
            entity.getComponent("input").started_at.y - entity.getComponent("spatial").pos.y
          )
      // else, if the action for stopping is executed
      } else if( actionName === "drag:stop" ){
        // simply let the object be quiet
        entity.getComponent("input").status = "still";
        console.log("Buuuuh! You stopped dragging me!")
      }
    },

    process: function(entity) {
      // Call daddy
      this._super(entity);
      
      // Shortcuts
      status = entity.getComponent("input").status;

      if( this.isInputState(entity, "drag:move")
        && status === "start" ){
          // If the state is drag:move and the object previously
          // started being dragged
          // then let's switch it's status to move!
          entity.getComponent("input").status = "move";
          console.log("Kudos! You are dragging me now!")
      } else if ( status === "move") {
          // If (the state is drag:move and )the status is move
          // this.isInputState(entity,"drag:move") &&
          // When using this expression the dragging works
          // Unless you move the mouse too quickly
          // Then it breaks

          // Calculate the new position depending on the device
          var new_x = 0, new_y = 0;
          new_x = pc.device.input.mousePos.x;
          new_y = pc.device.input.mousePos.y;

          // Substract the offset
          new_x -= entity.getComponent("input").offset.x;
          new_y -= entity.getComponent("input").offset.y;

          // Move the goddarn object using the mouse position minus the offset
          entity.getComponent("spatial").pos.x = new_x;
          entity.getComponent("spatial").pos.y = new_y;

          // Without the offset the object "jumps" to wherever you clicked
          // obviously within it's own area, but it looks bad
      }

    }

  });