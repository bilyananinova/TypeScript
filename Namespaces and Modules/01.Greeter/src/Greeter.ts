console.log(123);
namespace Greeter {
    export interface Greeter<T> {
        introduction: () => void;
        sayGoodbye: (name: T) => void;
    }
}