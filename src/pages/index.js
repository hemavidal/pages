import React from 'react'
import Link from 'gatsby-link'
import ExperienceCard from '../components/cards/ExperienceCard'

const styles = {
  skill: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
    width: 'auto',
    display: 'inline'
  }
}

const renderSkills = () => {
  const listOfSkills = [
    'Java', 'React', 'Redux', 'JavaScript', 'Electron',
    'MongoDB', 'Grails', 'JavaFX', 'Jira', 'GiLab',
    'Apache Server', 'Apache Tomcat', 'Jenkins', 'Sonarqube',
    'Linux', 'Android', 'HTML', 'CSS', 'Python'
  ]
  const allSkills = []

  for (const skill of listOfSkills) {
    console.log(skill);
    allSkills.push(<p style={styles.skill}>{skill}</p>)
  }

  return allSkills
}

const IndexPage = () => (
  <div style={{ textAlign: 'center', width: '100%'}}>
    <h1>Sobre mim</h1>
    <p>
      Eu sou um desenvolvedor fascinado pela linguagem JavaScript.
      Atualmente tenho trabalhado com aplicativos React + Redux e estudando frameworks JS para participar desta incrível linguagem assíncrona e seus benefícios.
      Nas minhas experiências, trabalhei com o framework Electron Cross-Platform com o React + Redux para aprimorar softwares desktop.
      A linguagem de programação que tenho como base é Java. Eu também trabalhei com framework JavaFX.
      Posso gerenciar banco de dados MongoDB e manter a integridade dos dados e usar técnicas de indexação para melhorar o desempenho das consultas.
      Tenho habilidades para gerenciar/configurar CD/CI usando Jenkins ou GitLab.
    </p>
    <div style={{pageBreakBefore: 'always'}}/>
    <h1>Experiência</h1>

    <ExperienceCard>
      <p>Janeiro de 2017 - Dezembro de 2017</p>
      <img src='http://splab.computacao.ufcg.edu.br/_/rsrc/1472778943502/config/customLogo.gif?revision=2' style={{width:200}}/>
      <h2>UFCG/SPLab + Ingenico Group</h2>
      <h3>Líder de Equipe
      </h3>
      <h4>
        Java Developer
        <br/>React + Redux Developer
        <br/>MongoDB Admin
        <br/>DevOps and CD/CI Admin
      </h4>
      <p>
        Eu fui introduzido no mundo da Plataforma Cruzada Eletrônica,
        eu parei usar o JS como único manipulador de DOM e comecei a desenvolver-se em recursos NodeJS e ES6.
        Nesta posição, trabalhei em contato com o cliente participei de reuniões para especificar os requisitos dos produtos para passá-los para a equipe,
        bem como para facilitar e alocar tarefas para a equipe. Trabalhei também como desenvolvedor uma parte do tempo.
        Usamos o Electron com React + Redux no processo renderer do Electron. Utilizamos o GitLab CD/CI para gerenciar os builds.</p>
    </ExperienceCard>

    <div style={{pageBreakBefore: 'always'}}/>

    <ExperienceCard>
      <p>Setembro de 2015 - Dezembro de 2016</p>
      <img src='http://splab.computacao.ufcg.edu.br/_/rsrc/1472778943502/config/customLogo.gif?revision=2' style={{width:200}}/>
      <h2>UFCG/SPLab + Ingenico Group</h2>
      <h3>
        Líder de Equipe
      </h3>
      <h4>
        Especificador de Requisitos
        <br/>Java/JavaFX Developer
        <br/>MongoDB Admin
        <br/>DevOps and CD/CI Admin
      </h4>
      <p>
        Nessa posição, consegui gerenciar a equipe de desenvolvimento usando o JIRA e também desenvolver o sistema. O sistema foi criado com o
        Grails na parte do servidor web e JavaFX como o aplicativo de desktop
        para se comunicar com o servidor.
      </p>
    </ExperienceCard>

    <div style={{pageBreakBefore: 'always'}}/>

    <ExperienceCard>
      <p>Janeiro de 2014 - Agosto de 2015</p>
      <img src='http://splab.computacao.ufcg.edu.br/_/rsrc/1472778943502/config/customLogo.gif?revision=2' style={{width:200}}/>
      <h2>UFCG/SPLab + Ingenico Group</h2>
      <h3>
        Desenvolvedor de Software
      </h3>
      <h4>
        Java/JavaSwing Developer
        <br/>Grails + MongoDB Developer
      </h4>
      <p>
        Nessa posição, consegui gerenciar a equipe de desenvolvimento usando o JIRA e também desenvolver o sistema. O sistema foi criado com o
        Grails na parte do servidor web e JavaFX como o aplicativo de desktop
        para se comunicar com o servidor.
      </p>
    </ExperienceCard>



    <ExperienceCard>
      <p>Fevereiro de 2011 - Março de 2013</p>
      <img src='http://www.cdsa.ufcg.edu.br/home/arq/logomarca/logo_atual/UFCG-Central.png' style={{height:120}}/>
      <h2>UFCG</h2>
      <h3>
        Monitor de Programação 1
      </h3>
      <h4>
        Python
      </h4>
      <p>
        Nesta experiência tive contato com correção de códigos,
        tutoria aos alunos com a linguagem de programação Python.
      </p>
    </ExperienceCard>

    <br/>

    <h1>Formação Acadêmica</h1>

    <ExperienceCard>
      <p>Agosto de 2010 - Agosto de 2015</p>
      <img src='http://www.cdsa.ufcg.edu.br/home/arq/logomarca/logo_atual/UFCG-Central.png' style={{height:120}}/>
      <img src='http://status.lcc.ufcg.edu.br/logo.png' style={{height:120, marginLeft: 40}}/>
      <h3>
        Bacharelado em Ciências da Computação
      </h3>
    </ExperienceCard>

    <ExperienceCard>
      <p>Janeiro de 2009 - Julho de 2010 (Incompleto)</p>
      <img src='http://www.uepb.edu.br/download/arquivos_para_download/marcas-uepbs/Marca-da-UEPB-Aplicacao-Colorida-em-PNG-4.png' style={{height:80}}/>
      <h3>
        Licenciatura em Ciências da Computação
      </h3>
      <p>Conhecimentos de algoritmo. Linguagem Pascal. Linguagem Java</p>
    </ExperienceCard>

    <div style={{pageBreakBefore: 'always'}}/>

    <h1>Habilidades</h1>

    <div style={{margin:20}}>
      <p style={styles.skill}>React</p>
      <p style={styles.skill}>Redux</p>
      <p style={styles.skill}>JavaScrit</p>
      <p style={styles.skill}>React-Native</p>
      <p style={styles.skill}>Electron</p>
      <p style={styles.skill}>MongoDB</p>
    </div>
    <div style={{margin:20}}>
      <p style={styles.skill}>Grails</p>
      <p style={styles.skill}>Java</p>
      <p style={styles.skill}>JavaFX</p>
      <p style={styles.skill}>Python</p>
      <p style={styles.skill}>GitLab CI/CD</p>
      <p style={styles.skill}>Apache Server</p>
    </div>
    <div style={{margin:20}}>
      <p style={styles.skill}>Apache Tomcat</p>
      <p style={styles.skill}>Sonarqube</p>
      <p style={styles.skill}>Linux</p>
      <p style={styles.skill}>Android</p>
      <p style={styles.skill}>HTML</p>
      <p style={styles.skill}>CSS</p>
    </div>

    <br/>

    <h1>Idiomas</h1>

    <div style={{margin:20}}>
      <p style={styles.skill}>Inglês Intermediário</p>
      <p style={styles.skill}>Português Fluente</p>
    </div>

    <br/>
    <h1>Comunidades</h1>

    <a style={{margin:20, fontSize:70, color:'black'}} href="https://github.com/hemavidal" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
    <a style={{margin:20, fontSize:70, color:'black'}} href="https://stackoverflow.com/users/3108872/hem%C3%A3-vidal" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>

    <br/>
    <br/>
    <h1>Contato</h1>

    hemavidal@gmail.com


  </div>
)

export default IndexPage
