MouseHoverableComponent = pc.components.Input.extend("MouseHoverableComponent",
  { 
    create: function() {
      return this._super({
        states: 
        [
          ["hover", ["MOUSE_MOVE"]]
        ]
      });
    }
  },

  {
  });