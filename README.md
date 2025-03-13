# Aplicación

- Librería Mistral, Ecommerce.

## Interfaz de usuario

- Esta aplicación es un comarcio en línea, una tienda de útiles escolares,
  universitarios y de oficina. Los usuarios pueden explorar el catalogo
  de productos a través de la barra de navegación en el modo escritorio
  o por medio de una barra lateral que se despliega en modo movil.

- El catalogo de productos muestra un grid de cartas, cada una con
  la foto, el nombre y el precio del producto. Al hacer click en una
  de la cartas se redirige hacia la vista con el detalle del producto,
  donde se puede elegir entre agregar el producto a la bolsa o comprar
  ahora (Se está trabajando en este componente donde el usuario pueda
  ingresar sus datos de contacto y dirección).

- Cuando el usuario da click en agregar a la bolsa, automaticamente
  su icono correspondiente a la derecha del encabezado, aumenta la cuenta
  en uno, notificando la cantidad de productos que hay en el carrito de
  compras, al darle click se mustra el carrito.

- El carrito de compras es una sección donde se enlistan los productos
  que el usuario ha agregado. Cada bloque de producto en la lista es un
  grid compuesto por la foto, el nombre, el precio, la cantidad del
  producto y una botonera para aumentar o disminuir la cantidad o
  eliminar el producto de la lista del carrito.

- Cada vez que el usuario aumenta o disminuye la cantidad de uno o
  varios productos, se multiplica el precio por la cantidad dando así
  el precio total de los productos. También aumenta la cantidad en el
  icono notificador. Se pueden eliminar los productos del carrito uno
  por uno o vaciar directamente el carrito. El botón comprar debería
  dirigir al usuario al componente que se está desarrollando (mencionado
  anteriormente) para que el usuario pueda ingresar su información de
  contato y dirección.

- El cliente se puede registrar ingresando su nombre, sus apellidos,
  correo electrónico y una contraseña. Una vez registrado exitosamente
  puede iniciar sesión.

- La página renderiza el nombre del usuario que inició sesión a la
  derecha del encabezado.

- El usuario puede ingresar a su perfil haciendo click en el icono
  de cuenta junto con su nombre. Su perfil muestra su nombre, apellidos
  y su correo electrónico. Pronto el usuario podrá agregar una foto
  de avatar, su información de contacto y dirección. El icono a la
  derecha del bloque permite al usuario cerrar sesión.

- Se está trabajando en interfaces como el perfil, barra de busqueda,
  un filtrador de productos y el proceso de pago.

## Funcionalidad

### Enrutamiento:

- Se ha instalado e importado la última versión de react-router-dom
  que proporciona el componente integrado Routes para envolver las rutas,
  comparándolas de manera exclusiva y renderizando sólo una de ellas en
  cada ruta.

- El componente integrado Route se utiliza tantas veces como sea necesario
  para los diferentes componentes que la página renderiza.

- Se creó el componente ProtectedRoute protege la ruta que lleva al
  perfil del usuario. ProtectedRoute hace uso del componente integrado
  Navigate que redirige al usuario a iniciar sesión si no lo ha hecho aún,
  dependiendo de la variable de estado loggedIn. El children de
  ProtectedRoute es Profile.

- Debido a la creación de componentes funcionales, también se utiliza
  el hook useNavigate para dirigir a los usuarios a las diferentes rutas.
  Por ejemplo: Cuando un usuario se registra exitosamente, se abre un
  popup con un mensaje de éxito; al cerrar este popup, se redirige
  al usuario a la ruta login para que inicie sesión.

### Registro e inicio de sesión:

- El componente Register, a través de sus variables de estado y
  manejadores de cambio en los inputs, se encarga de que los usuarios
  puedan registrarse ingresando su nombre, apellidos, correo y contraseña.
  Una vez registrados correctamente los usuarios, pueden iniciar sesión
  en el componente Login, que también a través de las variables de
  estado y manejadores correspondientes permiten el correcto
  inicio de sesión, de lo contrario se otorga un mensaje de error
  en ambos componentes.

- En caso de que el usuario tenga éxito o no al registrarse, el
  componente InfoToolTips tiene un par de childrens que consisten
  en ventanas modales que muestran un mensaje correspondiente.

### Autenticación:

Se ha creado un archivo en el directorio utils llamado auth.js, el
cual contiene las peticiones fetchs al backend para el registro,
el inicio de sesión que guarda en el almacenamiento local el token
proporcionado por el backend en la respuesta exitosa. También hay
un fetch que envía un Bearer token al backend para que lo revise
y de la autorización, de esta manera el usuario mantendrá su sesión
iniciada cuando vuelva a la página web. En caso de que el token sea
inválido se redirige al usuario a la vista de inicio de sesión.

### Validación de formularios:

Validación de formularios a través de la librería React Hook Form.
El hook useForm contiene un registro para los inputs, un manejo
de errores, un controlador de envío y un resetéo de ser necesario.
La función yupResolver maneja las reglas para cada una de las
entradas de los inputs establecidas en sus esquemas correspondientes,
estas reglas se especifican dentro del objeto yup.object. El mensaje
de error se renderiza debajo de los inputs.

## Herramientas y tecnologías:

React, Vite, React router dom, React hook form, Yup, Lucile React, Eslint.

## Dominio:

https://www.libreriamistral.jumpingcrab.com/
