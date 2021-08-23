// Essa é outra forma de escrever um decorator, quando ele não vai receber parâmetros
export function escapar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
     let retorno = metodoOriginal.apply(this, args);

     if (typeof retorno === 'string') {
       retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
     }
  }

  return descriptor;
}