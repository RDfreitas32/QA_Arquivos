
describe('Testes para aprendizado', () => {

    it('equality', () => {
        const a = 1

        expect(a).equal(1);
        expect(a).to.be.equal(1);
        expect('a').not.to.be.equal('b');

    })

    it('truthy', () => {
        const a = true;
        const b = null;
        let c;

        expect(a).to.be.true;
        expect(true).to.be.true;
        expect(b).to.be.null;
        expect(a).to.be.not.null;
        expect(c).to.be.undefined;
    })

    it('Equality', () => {
        const obj = {
            a:1,
            b:2
        }

        expect(obj).equal(obj); // ou ().to.be.equal()
        expect(obj).equals(obj);
        expect(obj).eq(obj); // apenas abreviou equal
        expect(obj).to.be.equal(obj); // compara os objetos em si
        expect(obj).to.be.deep.equal({a:1,b:2}); // compara os valores dentro de obj
        expect(obj).include({a:1}); //verifica se 'c' esta em obj
        expect(obj).to.have.property('b');
        expect(obj).to.have.property('b', 2);
        expect(obj).not.to.be.empty;
        expect({}).to.be.empty;

    })

    it('Arrays', () => {
        const arr = [1,2,3]

        expect(arr).to.have.members([1,2,3]); // o members verifica todos os itens
        expect(arr).to.include.members([1,3]); // aqui o include verifica junto com members, se 1 e 3 estão em arr
        expect(arr).to.not.be.empty;
        expect([]).to.be.empty;
    })

    it('String', () =>{
        const str = 'String de teste'
        
        expect(str).to.be.equal('String de teste');
        expect(str).to.have.length(15);
        expect(str).to.contains('de');
        expect(str).to.match(/de/);
        expect(str).to.match(/^String/); // se começa com uma string
        expect(str).to.match(/teste$/); // se termina com teste
        expect(str).to.match(/.{15}/); // se termina com 15/ igual linha 57
        expect(str).to.match(/\w+/) // verifica se só contém letras
        expect(str).to.match(/\D+/) //verifica se não contém numeros
    })

    it('Numeros', () => {
        const number = 4
        const floatNumber = 5.2123

        expect(number).to.be.equal(4);
        expect(number).to.be.above(3);
        expect(number).to.be.below(7);
        expect(floatNumber).to.be.equal(5.2123);
        expect(floatNumber).to.be.closeTo(5.2, 0.1); // perto de 5.2, margem de proximidade de 0.1
        expect(floatNumber).to.be.above(5);
    })

})