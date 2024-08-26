// AdminPanel.js
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { db } from '../../../../services/firebase.config';
import { BudgetsListContainer, LogoutButton, StyledTable, StyledTbody, StyledTd, StyledTh, StyledThead, StyledTr, SyledModal } from './styles';
import { AuthContext } from '../../../../contexts/AuthEmailProvider';
import { ToastifyContext } from '../../../../contexts/ToastifyProvider';
import { XCircle } from '@phosphor-icons/react';
// import Modal from 'react-modal';

interface IBudget {
  id: string;
  name: string;
  enterprise?: string;
  email: string;
  phone: string;
  serviceCategory: string;
  description: string;
  budget: string;
  location: string;
  status: string;
}

export const BudgetsList = () => {
  const authContext = useContext(AuthContext);
  const { notifySuccess, notifyError } = useContext(ToastifyContext);
  const budgetsCollectionRef = collection(db, "budget-requests");
  const [budgets, setBudgets] = useState<IBudget[]>([])

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<IBudget | null>(null);
  const [currentBudgetStatus, setCurrentBudgetStatus] = useState('');


  const [refresh, setRefresh] = useState(false);

  // console.log(import.meta.env.VITE_API_KEY)

  useEffect(() => {
    const getBudgets = async () => {
      const data = await getDocs(budgetsCollectionRef);
      setBudgets(
        data.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          enterprise: doc.data().enterprise,
          email: doc.data().email,
          phone: doc.data().phone,
          serviceCategory: doc.data().serviceCategory,
          description: doc.data().description,
          budget: doc.data().budget,
          location: doc.data().location,
          status: doc.data().status,
        }))
      );
    }
    getBudgets();
    
  }, [refresh])

  const handleLogout = async () => {
    if (authContext) {
      try {
        await authContext.logout();
        alert('Logout realizado com sucesso!');
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    } else {
      console.error('O contexto de autenticação não está disponível.');
    }
  }

  // console.log(budgets.map((budgets) => budgets.name))

  const handleRowClick = (budget: IBudget) => {
    setSelectedBudget(budget);
    setCurrentBudgetStatus(budget.status);
    setIsOpen(true);
  };
  
  const handleStatusChange = async () => {
    if (selectedBudget) {
      // Lógica para atualizar o status no Firebase
      const budgetRef = doc(db, 'budget-requests', selectedBudget.id);

      try {
        await updateDoc(budgetRef, { status: currentBudgetStatus });
        setIsOpen(false);
        notifySuccess("O status foi atualizado!");
        setRefresh(prevState => !prevState)
      } catch (error) {
        console.error(`Não foi possível atualizar o status: ${error}`);
        notifyError(`Não foi possível atualizar o status: ${error}`);
      }
    }
  };
  // Atualizar a lista de orçamentos
  
  const handleDeleteBudget = async () => {
    if (selectedBudget) {
      const confirmed = window.confirm("Tem certeza que deseja excluir este orçamento?");

      if (confirmed) {
        // Lógica para excluir o orçamento no Firebase
        const budgetRef = doc(db, 'budget-requests', selectedBudget.id);
        await deleteDoc(budgetRef);
        setIsOpen(false);
        notifySuccess("O orçamento foi excluído!");
        // Remover o orçamento da lista local
        // setBudgets(budgets.filter(b => b.id !== selectedBudget.id));
        setRefresh(prevState => !prevState)
      }
    }
  };
  

  return (
    <BudgetsListContainer>
      <h2>Painel de Administração</h2>
      <LogoutButton onClick={handleLogout}>logout</LogoutButton>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Nome</StyledTh>
            <StyledTh>Telefone</StyledTh>
            <StyledTh>Tipo de Serviço</StyledTh>
            <StyledTh>Status</StyledTh>
          </tr>
        </StyledThead>
        <StyledTbody>
          {budgets.map(budgets => (
            <StyledTr key={budgets.id} onClick={() => handleRowClick(budgets)}>
              <StyledTd>{budgets.name}</StyledTd>
              <StyledTd>{budgets.phone}</StyledTd>
              <StyledTd>{budgets.serviceCategory}</StyledTd>
              <StyledTd 
                id={
                  budgets.status === "novo" ? "blue" :
                  budgets.status === "andamento" ? "orange" :
                  budgets.status === "concluido" ? "green" :
                  ""
                }
              >
                {
                  budgets.status === "novo" ? "Novo" :
                  budgets.status === "andamento" ? "Em Andamento" :
                  budgets.status === "concluido" ? "Concluído" :
                  ""
                }
              </StyledTd>
            </StyledTr>
          ))}
        </StyledTbody>
      </StyledTable>

      <SyledModal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Modal"
      >
        <h2>Detalhes do Orçamento</h2>
        {
          selectedBudget && (
            <>
              <p><strong>Nome:</strong> {selectedBudget.name}</p>
              <p><strong>Empresa:</strong> {selectedBudget.enterprise}</p>
              <p><strong>Email:</strong> {selectedBudget.email}</p>
              <p><strong>Telefone:</strong> {selectedBudget.phone}</p>
              <p><strong>Categoria do Serviço:</strong> {selectedBudget.serviceCategory}</p>
              <p><strong>Descrição:</strong> {selectedBudget.description}</p>
              <p><strong>Orçamento:</strong> {selectedBudget.budget}</p>
              <p><strong>Local:</strong> {selectedBudget.location}</p>
            </>
          )
        }

        <div className="action-buttons">
          <div className="status-wrapper">
            <span>Status:</span>
            <select value={currentBudgetStatus} onChange={(e) => setCurrentBudgetStatus(e.target.value)}>
              <option value="novo">Novo</option>
              <option value="andamento">Em Andamento</option>
              <option value="concluido">Concluído</option>
            </select>
            <button id="alterar-btn" onClick={handleStatusChange}>Alterar Status</button>
          </div>
          <button id="excluir-btn" onClick={handleDeleteBudget}>Excluir</button>
        </div>

        <XCircle 
          size={24} 
          id="close-btn"
          onClick={() => setIsOpen(false)}
        />
      </SyledModal>
    </BudgetsListContainer>
  );
};
