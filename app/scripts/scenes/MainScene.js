MainScene = pc.Scene.extend('MainScene',
    { },
    {
        gameLayer:null,
        box: null,

        init:function ()
        {
            this._super();

            //--------------------------------------------------------------------
            // game layer
            //--------------------------------------------------------------------
            this.gameLayer = this.addLayer(new pc.EntityLayer('game layer', 10000, 10000));

            // all we need is the render system
            this.gameLayer.addSystem(new pc.systems.Render());
            this.gameLayer.addSystem(new MouseHoverableSystem());

            this.box = pc.Entity.create(this.gameLayer);

            this.box.addComponent(pc.components.Rect.create({ color:'#ff0000' }));
            this.box.addComponent(pc.components.Spatial.create({ x:200, y:200, w:300, h:300 }));
            this.box.addComponent(MouseHoverableComponent.create());
        },

        process:function ()
        {
            // clear the background
            pc.device.ctx.clearRect(0, 0, pc.device.canvasWidth, pc.device.canvasHeight);

            // always call the super
            this._super();
        }
    });