DraggableComponent = pc.components.Input.extend("DraggableComponent",
  {
    create: function() {
      return this._super({
        actions: [
            ["drag:start", ["MOUSE_BUTTON_LEFT_DOWN","TOUCH"]],
            ["drag:stop", ["MOUSE_BUTTON_LEFT_UP","TOUCH"]],
          ],
        states: [
            ["drag:move", ["MOUSE_MOVE"]]
          ]
      });
    }
  },

  {
    // still, start, move, stop
    status: "still", 
    // point in the plane where the dragging started
    started_at: null, 
    // used to recalculate the offset
    offset: null
  });