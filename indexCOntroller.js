angular.module("ManegementProcess", ['ngRoute']).controller("ManegementProcessCTRL",
    function ($scope, $http) {

        $scope.formPayload = false
        $scope.regras = true
        $scope.tabSimulacao = false
        $scope.buttonSimularAgora = true;
        $scope.simular = simular
        $scope.gerarSilumacao = gerarSilumacao;
        $scope.sair = sair;

        function simular() {
            $scope.formPayload = true;
            $scope.regras = false;
            $scope.simularAgora = false
            $scope.buttonSimularAgora = false
            $scope.mensagemErro = false;
        }

        function gerarSilumacao(payload) {
            $http.get("http://localhost:5001/emprestimo/simular?cpf=" + payload.cpf +
            "&email=" + payload.email +
            "&nome=" + payload.nome +
            "&quantidadeParcelas=" + payload.numeroParcelas +
            "&valorContrato=" + payload.valorContrato)
            .then(function (response) {
                criaGradeSimulacao(response)
                GradeSimulação()
            }, (response) => {
                validaResponseErro(response + "");
                erroMessage();
            });
        }


        function validaResponseErro(erro) {
            $scope.msg = "Erro!"
            $scope.msg = erro.indexOf("CPF inválido") == -1 ? $scope.msg : "CPF inválido!"
            $scope.msg = erro.indexOf("EMAIL invalido") == -1 ?  $scope.msg : "EMAIL invalido!" 
            $scope.msg = erro.indexOf("O número máximo de parcelas é 24") == -1 ?  $scope.msg : "O número máximo de parcelas é 24!"
        }


        function erroMessage() {
            $scope.formPayload = false;
            $scope.regras = false;
            $scope.tabSimulacao = false;
            $scope.buttonSimularAgora = true;
            $scope.mensagemErro = true;
        }

        function criaGradeSimulacao(response) {
            $scope.simulacao = {
                "id": response.data.id,
                "cpf": response.data.cpf,
                "nome": response.data.nome,
                "email": response.data.email,
                "simuladorEmprestimo": {
                    "id": response.data.simuladorEmprestimo.id,
                    "numeroContrato": response.data.simuladorEmprestimo.numeroContrato,
                    "dataSimulacao": formataData(response.data.simuladorEmprestimo.dataSimulacao),
                    "dataValidadeSimulacao": formataData(response.data.simuladorEmprestimo.dataValidadeSimulacao),
                    "valorContrato": response.data.simuladorEmprestimo.valorContrato,
                    "quantidadeParcelas": response.data.simuladorEmprestimo.quantidadeParcelas,
                    "valorParcela": response.data.simuladorEmprestimo.valorParcela,
                    "taxaJurosEmprestimo": response.data.simuladorEmprestimo.taxaJurosEmprestimo,
                }
            }
        }

        function formataData(data) {
            const dia = data.substring(8, 10);
            const mes = data.substring(5, 7);
            const ano = data.substring(0, 4);
            const dataFormatada = dia + "/" + mes + "/" + ano;
            return dataFormatada;
        }


        function GradeSimulação() {
            $scope.formPayload = false
            $scope.regras = false
            $scope.tabSimulacao = true
        }

        function sair() {
            $scope.formPayload = false
            $scope.regras = true
            $scope.tabSimulacao = false
            $scope.buttonSimularAgora = true;
            $scope.mensagemErro = false;
        }

    });