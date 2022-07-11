const getValue = <MyType>(value: MyType)=> {
    const array: MyType[] = [value];
    return value;
}

getValue<string>('string');
getValue<number>(1)
getValue<number[]>([1,2,3])