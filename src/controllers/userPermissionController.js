        // permission control management
        
           /*  #multiple permissions to a particular role
        async function checkPermissions(permissions) {
            return async function(req, res, next) {
              const userRole = req.user.role;
              const role = await db.roles.findOne({ name: userRole });
              if (role && permissions.every(permission => role.permissions.includes(permission))) {
                next();
              } else {
                res.status(403).json({ message: 'Forbidden' });
              }
            }
          }
        
        app.put('/products/:id', checkPermissions(['update', 'delete']), function(req, res) {
            // code to update a product
          });
         */
            
            /*   
             #granular permission management to various roles
             function checkPermission(component, permission) {
                return function(req, res, next) {
                  const userRole = req.user.role;
                  const permissions = roles[userRole][component];
                  if (permissions && permissions.includes(permission)) {
                    next();
                  } else {
                    res.status(403).json({ message: 'Forbidden' });
                  }
                }
              }
                
            app.get('/product-management/inventory', checkPermission('inventory', 'read'), function(req, res) {
                // code to retrieve inventory
              });
            
              app.put('/product-management/inventory', checkPermission('inventory', 'update'), function(req, res) {
                // code to update inventory
              });
            
              app.get('/product-management/pricing', checkPermission('pricing', 'read'), function(req, res) {
                // code to retrieve pricing
              }); */
                