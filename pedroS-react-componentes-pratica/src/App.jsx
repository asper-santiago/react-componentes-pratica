
function App() {
  return (
    <div className="container">
      <Titulo />

      <h2>Alunos</h2>

      <Aluno nome="bruna" turma="desi" />
      <Aluno nome="Frederico" turma="desi" />
      <Aluno nome="Ariel" turma="desi" />

      <h2>Notas</h2>

      <Nota disciplina="Eletronica" nota={6.8} />
      <Nota disciplina="JavaScript" nota={7} />
      <Nota disciplina="HTML e CSS" nota={6.7} />

      <h2>Produtos</h2>

      <div className="produtos">
        <Produto
          nome="Mouse gamer"
          descricao="Mouse com iluminação RGB"
          preco={250}
          disponivel={true}
        />

        <Produto
          nome="Teclado gamer"
          descricao="Teclado gamer sem fio magnético"
          preco={150}
          disponivel={true}
        />

        <Produto
          nome="Monitor"
          descricao="Monitor 8K"
          preco={1000}
          disponivel={false}
        />

        <Produto
          nome="Headset"
          descricao="Headset para gamers"
          preco={100}
          disponivel={true}
        />
      </div>
    </div>
  );
}

export default App;